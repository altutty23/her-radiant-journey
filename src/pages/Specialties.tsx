import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecialtiesSection from "@/components/Specialties";

const Specialties = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black">Specialties </span>
              <span className="text-[#e60073]">&amp; Topic Areas</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hormones to hot flashes, I cover the topics that matter most during the menopause transition.
            </p>
          </div>

          <SpecialtiesSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Specialties;
