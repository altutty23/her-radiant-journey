
import { Card, CardContent } from "@/components/ui/card";
import { Info, Award, Users, BookOpen, Heart, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50/50 py-20 md:py-28">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-20 opacity-0 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-peri-pink to-peri-lightpink mb-6 shadow-lg">
            <Info className="h-7 w-7 text-[#e60073]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">About The Periproffesional</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#e60073] to-peri-magenta rounded-full mb-8"></div>
          <p className="max-w-4xl text-gray-600 text-xl leading-relaxed">
            Trustworthy perimenopause & menopause health information that doesn't bore you to tears! Science packaged as entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative opacity-0 animate-fade-in animate-delay-100">
            <div className="relative z-10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-peri-pink/20 to-peri-magenta/20 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <img src="/lovable-uploads/0a8e9de0-522d-43f4-b075-e0f9e586b6ca.png" alt="Shelby, The Periproffesional" className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-white" />
            </div>
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-20 h-80 rounded-full bg-gradient-to-b from-peri-pink/60 to-[#e60073]/60 -z-10 blur-sm"></div>
          </div>

          <div className="space-y-8 opacity-0 animate-fade-in animate-delay-200">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-peri-lightpink/40 to-peri-pink/20 rounded-full">
              <Heart className="h-4 w-4 text-[#e60073] mr-2" />
              <span className="text-sm font-semibold text-[#e60073]">Meet Your Guide</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Shelby, The Periproffesional</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                "The Mrs. Maisel of menopause!" I'm a certified perimenopause educator who blends science and humor. Are you over 40 and haven't felt like yourself lately? Stick around and learn why the biology of perimenopause may be making you feel like crap.
              </p>
              
              <p>
                In October 2019, at 49, I walked into my annual doctor's appointment and said, "I'm not feeling like myself." I had all sorts of weird symptoms, but I couldn't pinpoint what they were related to or why they were happening.
              </p>

              <p>
                The Periproffesional website and newsletter are written by a certified menopause educator and are filled with valuable, applicable health and wellness information. No boring lectures or complicated terms here!
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced My Promise Section */}
        <div className="bg-gradient-to-br from-peri-lightpink/30 via-white to-peri-pink/20 rounded-3xl p-10 md:p-12 mb-20 opacity-0 animate-fade-in animate-delay-300 border border-peri-pink/20 shadow-xl">
          <div className="flex items-center justify-center mb-8">
            <Star className="h-6 w-6 text-[#e60073] mr-3" />
            <h3 className="text-3xl font-bold text-[#e60073]">My Promise</h3>
            <Star className="h-6 w-6 text-[#e60073] ml-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <BookOpen className="h-8 w-8 text-[#e60073]" />
              </div>
              <h4 className="font-bold text-gray-800 mb-3 text-lg">Evidence-Based Content</h4>
              <p className="text-gray-600 leading-relaxed">Written personally by me using science with sources included as needed.</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <Users className="h-8 w-8 text-[#e60073]" />
              </div>
              <h4 className="font-bold text-gray-800 mb-3 text-lg">Relatable & Real</h4>
              <p className="text-gray-600 leading-relaxed">Complex health information made easy to understand with everyday language.</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <Award className="h-8 w-8 text-[#e60073]" />
              </div>
              <h4 className="font-bold text-gray-800 mb-3 text-lg">Unbiased Information</h4>
              <p className="text-gray-600 leading-relaxed">Self-supported without affiliate links or sponsored products.</p>
            </div>
          </div>
        </div>

        {/* Enhanced Qualifications Section */}
        <div className="mb-20 opacity-0 animate-fade-in animate-delay-400">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">My Qualifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden">
              <CardContent className="pt-8 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e60073] to-peri-magenta flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#e60073] text-xl">Education & Certification</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#e60073] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Certified menopause educator and trained health coach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#e60073] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Master of Health Administration (MHA) from Clark University & UMass Chan Medical School</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#e60073] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Bachelor of Science in Health Administration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#e60073] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Certificate of Management Studies from Suffolk University</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden">
              <CardContent className="pt-8 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-peri-magenta to-peri-purple flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#e60073] text-xl">Professional Memberships</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-peri-magenta mt-2 mr-3 flex-shrink-0"></span>
                    <span>Member of The Menopause Society (formerly NAMS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-peri-magenta mt-2 mr-3 flex-shrink-0"></span>
                    <span>Member of the International Menopause Society (IMS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-peri-magenta mt-2 mr-3 flex-shrink-0"></span>
                    <span>Member of the National Menopause Foundation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-peri-magenta mt-2 mr-3 flex-shrink-0"></span>
                    <span>30+ years in healthcare industry</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Personal Touch */}
        <div className="text-center opacity-0 animate-fade-in animate-delay-500">
          <div className="bg-gradient-to-r from-peri-lightpink/40 via-white to-peri-pink/40 rounded-3xl p-10 md:p-12 border border-peri-pink/20">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">My Life</h3>
            <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
              I've been proudly married to my hubs for 24 years and have college-aged twins. I love reading, laughing, and doing silly things. My bags are always packed for my next trip. I workout regularly and eat right (I follow an 80/20 rule). I "walk the talk" and am living proof you can thrive during this transition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
