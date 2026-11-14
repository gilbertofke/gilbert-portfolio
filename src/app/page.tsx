import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowICanHelp from "@/components/HowICanHelp";
import HowIWork from "@/components/HowIWork";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <HowICanHelp />
        <Projects />
        <Skills />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}