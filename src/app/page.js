import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Housing from "@/components/Housing";
import Culture from "@/components/Culture";
import Healthcare from "@/components/Healthcare";
import Events from "@/components/Events";
import Community from "@/components/Community";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Housing />
      <Culture />
      <Healthcare />
      <Events />
      <Community />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
