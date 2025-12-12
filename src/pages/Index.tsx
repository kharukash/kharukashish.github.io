import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="relative z-10 bg-background">
        <About />
        <Timeline />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
