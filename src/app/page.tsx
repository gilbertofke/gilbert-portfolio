import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Writing />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}