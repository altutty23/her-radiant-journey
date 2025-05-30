
import { Mail, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50/50 to-white py-20 md:py-28">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-20 opacity-0 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-peri-pink to-peri-lightpink mb-6 shadow-lg">
            <Mail className="h-7 w-7 text-[#e60073]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Learn More</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#e60073] to-peri-magenta rounded-full mb-8"></div>
          <p className="max-w-3xl text-gray-600 text-xl leading-relaxed">
            Have questions about our services or ready to start your journey? Visit our website for more information.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="opacity-0 animate-fade-in animate-delay-100">
            <div className="bg-gradient-to-br from-white via-peri-lightpink/20 to-white p-10 md:p-12 rounded-3xl shadow-2xl border border-peri-pink/20">
              <h3 className="text-3xl font-bold mb-10 text-gray-800 text-center">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-peri-pink to-peri-lightpink p-3 rounded-2xl mr-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Globe className="h-7 w-7 text-[#e60073]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg mb-2">Website</h4>
                    <a href="https://theperiprofessional.substack.com/" target="_blank" rel="noopener noreferrer" className="text-[#e60073] hover:text-peri-magenta text-lg font-medium transition-colors duration-300 hover:underline">
                      theperiprofessional.substack.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-peri-magenta/20 to-peri-purple/20 p-3 rounded-2xl mr-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#e60073]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg mb-2">Location</h4>
                    <p className="text-gray-600 text-lg">Virtual consultations available worldwide</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-peri-pink/20">
                <h4 className="font-bold mb-6 text-gray-800 text-xl text-center">Follow Us</h4>
                <div className="flex justify-center space-x-6">
                  <a href="https://www.facebook.com/theperiprofessional" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-white to-peri-lightpink/30 p-4 rounded-2xl text-[#e60073] hover:text-white hover:bg-[#e60073] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/theperiprofessional" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-white to-peri-lightpink/30 p-4 rounded-2xl text-[#e60073] hover:text-white hover:bg-[#e60073] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://www.threads.com/@theperiprofessional" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-white to-peri-lightpink/30 p-4 rounded-2xl hover:bg-[#e60073] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    <img src="/lovable-uploads/09d52609-fe44-4dd0-a9a1-b1ef21e6625c.png" alt="Threads" className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
