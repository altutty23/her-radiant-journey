
import { Card, CardContent } from "@/components/ui/card";
import { Info, Award, Users, BookOpen, Quote } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-white py-8 md:py-12">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-peri-pink mb-4">
            <Info className="h-5 w-5 text-[#e60073]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About The Periprofessional</h2>
          <div className="w-24 h-1 bg-[#e60073] rounded mb-6"></div>
          <p className="max-w-3xl text-gray-700 text-lg">Trustworthy perimenopause & menopause health information that doesn't bore you to tears! Keeping it real and talking TMI. I tell it like it is... facts.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative opacity-0 animate-fade-in animate-delay-100">
            <div className="max-w-md mx-auto">
              <img src="/lovable-uploads/0a8e9de0-522d-43f4-b075-e0f9e586b6ca.png" alt="Shelby, The Periproffesional" className="w-full h-auto rounded-2xl shadow-lg border-4 border-[#e60073]" />
            </div>
          </div>

          <div className="space-y-6 opacity-0 animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-bold text-gray-800">Meet Shelby Tutty, The Periprofessional</h3>
            <p className="text-gray-700">
              "The Mrs. Maisel of menopause!" I'm a certified perimenopause educator who blends science and humor. Are you over 40 and haven't felt like yourself lately? Stick around and learn why the biology of perimenopause may be making you feel like crap.
            </p>
            
            <p className="text-gray-700">I'm perimenopausal, just like you. I've been studying perimenopause and menopause since 2021, after my own rough start to perimenopause several years before. I had all sorts of weird symptoms, but I couldn't pinpoint what they were related to or why they were happening. The information back then was terrible, and I became committed to changing that by becoming certified in menopause, training to become a health coach, and sharing my knowledge.</p>

            <p className="text-gray-700">The Periprofessional is your supportive ally in navigating perimenopause, helping you understand the changes occurring in your body and what to do about them so you can begin to feel better.</p>
          </div>
        </div>

        {/* My Promise Section */}
        <div className="bg-peri-lightpink rounded-2xl p-8 mb-16 opacity-0 animate-fade-in animate-delay-300">
          <h3 className="text-2xl font-bold text-[#e60073] mb-6 text-center">My Promise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <BookOpen className="h-8 w-8 text-[#e60073] mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">Science-backed Content</h4>
              <p className="text-sm text-gray-700">Provided personally by me, sharing the latest science and guidelines.</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-[#e60073] mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">Relatable & Real</h4>
              <p className="text-sm text-gray-700">Complex health information made easy to understand with everyday language.</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-[#e60073] mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">Unbiased Information</h4>
              <p className="text-sm text-gray-700">Self-supported without affiliate links or sponsored products.</p>
            </div>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="mb-16 opacity-0 animate-fade-in animate-delay-400">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">My Qualifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#e60073] bg-white shadow-lg rounded-2xl">
              <CardContent className="pt-6">
                <h4 className="font-bold text-[#e60073] mb-3">Education & Certifications</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Certified menopause educator and trained health coach</li>
                  <li>• Master of Health Administration (MHA) from Clark University & UMass Chan Medical School</li>
                  <li>• Bachelor of Science in Health Administration</li>
                  <li>• Certificate of Management Studies from Suffolk University</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#e60073] bg-white shadow-lg rounded-2xl">
              <CardContent className="pt-6">
                <h4 className="font-bold text-[#e60073] mb-3">Professional Affiliations</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Member of The Menopause Society</li>
                  <li>• Member of the International Menopause Society</li>
                  <li>• Founder of the Women's Health 365 Collective</li>
                  <li>• 30+ years in the healthcare industry</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* My Life Section with Box */}
        <Card className="border-2 border-[#e60073] bg-white shadow-lg rounded-2xl p-8 opacity-0 animate-fade-in animate-delay-500">
          <h3 className="text-2xl font-bold text-[#e60073] mb-6">My Life</h3>
          <p className="text-gray-700">I've been proudly married to my hubs for 25 years and have college-aged twins. I love reading, laughing, and doing silly things. My bags are always packed for my next trip. I workout regularly and eat right (I follow an 80/20 rule). I "walk the talk" and am living proof you can thrive during this transition.</p>
        </Card>

        {/* Testimonial Section */}
        <div className="mt-16 opacity-0 animate-fade-in animate-delay-600">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-[#e60073] bg-peri-lightpink shadow-lg rounded-2xl p-8">
              <div className="text-left">
                <Quote className="h-12 w-12 text-[#e60073] mb-6 transform scale-x-[-1]" fill="#e60073" />
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "The Periprofessional uncovers TMI and turns it into education. For those curious about what the heck is really going on in our 40s and beyond, look no further because Shelby has you covered. Everything from explaining wild hormones, offering the best resources and tips, to managing interactions with doctors. She's here for all of it and more!"
                </blockquote>
                <div className="text-[#e60073]">
                  — Jess Mujica, author of <em>Go With The Flow: Women's Cycle Awareness</em>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-[#e60073] bg-peri-lightpink shadow-lg rounded-2xl p-8">
              <div className="text-left">
                <Quote className="h-12 w-12 text-[#e60073] mb-6 transform scale-x-[-1]" fill="#e60073" />
                <div className="space-y-6">
                  <div>
                    <blockquote className="text-gray-700 mb-4 leading-relaxed italic">
                      "You should win an award for the most creative yet relatable way to share information on perimenopause! Your newsletter is truly fun to read, and I always look forward to the crucial information that you share. The amount of knowledge you have is fantastic!"
                    </blockquote>
                    <div className="text-[#e60073]">
                      — Susan C.
                    </div>
                  </div>
                  
                  <div>
                    <blockquote className="text-gray-700 mb-4 leading-relaxed italic">
                      "Shelby provides a wealth of information about mid-life, and she does it with panache!"
                    </blockquote>
                    <div className="text-[#e60073]">
                      — Amanda L.
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
