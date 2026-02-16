
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Perimenopause from "@/components/Perimenopause";
import About from "@/components/About";
import GetStarted from "@/components/GetStarted";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Perimenopause />
        <About />
        <GetStarted />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
