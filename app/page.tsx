import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
