import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#090a0f] text-[#f3f4f6]">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Floating Dynamic Navbar */}
      <Navbar />

      {/* Component 1 & 2: 500vh Sticky Scrollytelling Canvas + Parallax Overlay */}
      <ScrollyCanvas />

      {/* Component 3: Work Grid (below the 500vh container) */}
      <Projects />

      {/* Supporting Sections for Complete Awwwards Experience */}
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
