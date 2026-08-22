import BackgroundShader from "@/components/ui/BackgroundShader";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Capabilities from "@/components/sections/Capabilities";
import EducationSection from "@/components/sections/EducationSection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      {/* Dynamic WebGL Obsidian Background */}
      <BackgroundShader />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 px-4 md:px-8 max-w-container-max mx-auto overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Capabilities />
        <EducationSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
