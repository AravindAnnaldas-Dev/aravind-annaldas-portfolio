import ArchitectureSection from "@/components/ArchitectureSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ArchitectureSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}