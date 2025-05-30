
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Info, Award, Users, BookOpen } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [sliderValue, setSliderValue] = useState([75]);

  return <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-peri-pink mb-4">
            <Info className="h-5 w-5 text-[#e60073]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About The Periproffesional</h2>
          <div className="w-24 h-1 bg-[#e60073] rounded mb-6"></div>
          <p className="max-w-3xl text-gray-700 text-lg">
            Trustworthy perimenopause & menopause health information that doesn't bore you to tears! Science packaged as entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative opacity-0 animate-fade-in animate-delay-100">
            <div className="relative z-10">
              <img src="/lovable-uploads/0a8e9de0-522d-43f4-b075-e0f9e586b6ca.png" alt="Shelby, The Periproffesional" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-16 h-64 rounded-full bg-gradient-to-b from-peri-pink to-[#e60073] -z-10"></div>
          </div>

          <div className="space-y-6 opacity-0 animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-bold text-gray-800">Meet Shelby, The Periproffesional</h3>
            <p className="text-gray-700">
              "The Mrs. Maisel of menopause!" I'm a certified perimenopause educator who blends science and humor. Are you over 40 and haven't felt like yourself lately? Stick around and learn why the biology of perimenopause may be making you feel like crap.
            </p>
            
            <p className="text-gray-700">
              In October 2019, at 49, I walked into my annual doctor's appointment and said, "I'm not feeling like myself." I had all sorts of weird symptoms, but I couldn't pinpoint what they were related to or why they were happening.
            </p>

            <p className="text-gray-700">
              The Periproffesional website and newsletter are written by a certified menopause educator and are filled with valuable, applicable health and wellness information. No boring lectures or complicated terms here!
            </p>
          </div>
        </div>

        {/* My Promise Section */}
        <div className="bg-peri-lightpink rounded-2xl p-8 mb-16 opacity-0 animate-fade-in animate-delay-300">
          <h3 className="text-2xl font-bold text-[#e60073] mb-6 text-center">My Promise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <BookOpen className="h-8 w-8 text-[#e60073] mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">Evidence-Based Content</h4>
              <p className="text-sm text-gray-700">Written personally by me using science with sources included as needed.</p>
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
            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <h4 className="font-bold text-[#e60073] mb-3">Education & Certification</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Certified menopause educator and trained health coach</li>
                  <li>• Master of Health Administration (MHA) from Clark University & UMass Chan Medical School</li>
                  <li>• Bachelor of Science in Health Administration</li>
                  <li>• Certificate of Management Studies from Suffolk University</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <h4 className="font-bold text-[#e60073] mb-3">Professional Memberships</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Member of The Menopause Society (formerly NAMS)</li>
                  <li>• Member of the International Menopause Society (IMS)</li>
                  <li>• Member of the National Menopause Foundation</li>
                  <li>• 30+ years in healthcare industry</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* My Life Section with Box and Slider */}
        <Card className="border-2 border-[#e60073] bg-white shadow-lg rounded-2xl p-8 opacity-0 animate-fade-in animate-delay-500">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#e60073] mb-6">My Life</h3>
              <p className="text-gray-700 mb-6">
                I've been proudly married to my hubs for 24 years and have college-aged twins. I love reading, laughing, and doing silly things. My bags are always packed for my next trip. I workout regularly and eat right (I follow an 80/20 rule). I "walk the talk" and am living proof you can thrive during this transition.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center lg:w-48">
              <label className="text-sm font-medium text-[#e60073] mb-4">Life Balance</label>
              <div className="h-32 flex items-center">
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  orientation="vertical"
                  className="h-full"
                />
              </div>
              <span className="text-xs text-gray-600 mt-2">{sliderValue[0]}%</span>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};

export default About;
