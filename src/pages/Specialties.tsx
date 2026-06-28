import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecialtiesSection from "@/components/Specialties";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

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

          <div className="mt-16 flex justify-center">
            <a
              href="https://clientportal.us.zandahealth.com/clientportal/theperiprofessional/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="text-white rounded-full bg-[#e60073] hover:bg-[#d1005f] px-8 py-6 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Specialties;
