
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GetStarted from "@/components/GetStarted";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SideSlider from "@/components/SideSlider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <GetStarted />
        <Contact />
      </main>
      <Footer />
      <SideSlider />
    </div>
  );
};

export default Index;
