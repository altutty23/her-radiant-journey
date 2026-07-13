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
      <main className="pt-16">
        <section className="section-container">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black">Perimenopause and Menopause </span>
              <span className="text-[#e60073]">Specialties and Topic Areas</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hormones to hot flashes, I cover the topics that matter most during the menopause transition. I'll help you create a plan to address concerns and alleviate symptoms through lifestyle support.
            </p>
          </div>

          <SpecialtiesSection />

          <div className="mt-12 flex justify-center">
            <a
              href="https://clientportal.us.zandahealth.com/clientportal/theperiprofessional/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="text-white rounded-full bg-[#e60073] hover:bg-[#d1005f] px-8 py-6 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Appointment!
              </Button>
            </a>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-black">Does this sound </span>
              <span className="text-[#e60073]">familiar?</span>
            </h2>
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
              <ul className="text-left space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#e60073] shrink-0" />
                  <span>Not feeling well during perimenopause and feeling uncertain about how to feel better.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#e60073] shrink-0" />
                  <span>You don't know what info is real or not.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#e60073] shrink-0" />
                  <span>You're overwhelmed by too much info.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#e60073] shrink-0" />
                  <span>The information is confusing or contradictory.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#e60073] shrink-0" />
                  <span>You're spending too much time and energy researching all of this, or you don’t have the time or energy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#e60073] shrink-0" />
                  <span>The changes you’ve made aren't helping.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#e60073] shrink-0" />
                  <span>You don’t have anyone to talk to about this.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#e60073] shrink-0" />
                  <span>You feel ashamed of your symptoms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#e60073] shrink-0" />
                  <span>You feel dismissed by your doctor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#e60073] shrink-0" />
                  <span>You don’t know where to start or what habits to put into place first.</span>
                </li>
              </ul>
              <p className="mt-10 text-xl font-medium text-[#e60073]">
                I can help with the above and more!
              </p>
              <div className="mt-10 flex justify-center">
                <a
                  href="https://clientportal.us.zandahealth.com/clientportal/theperiprofessional/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-white rounded-full bg-[#e60073] hover:bg-[#d1005f] px-8 py-6 text-lg">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Appointment!
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Specialties;
