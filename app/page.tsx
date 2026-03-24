import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Results />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      {/* AIチャットボット（右下フローティング） */}
      <Chatbot />
    </>
  );
}
