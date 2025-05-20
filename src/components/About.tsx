
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-peri-pink mb-4">
            <Info className="h-5 w-5 text-peri-magenta" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About The Periproffesional</h2>
          <div className="w-24 h-1 bg-peri-magenta rounded mb-6"></div>
          <p className="max-w-2xl text-gray-700 text-lg">
            Dedicated to empowering women through the journey of menopause with evidence-based guidance and compassionate support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative opacity-0 animate-fade-in animate-delay-100">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551022372-0bdac482b9d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Professional women's health coach"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-16 h-64 rounded-full bg-gradient-to-b from-peri-pink to-peri-magenta -z-10"></div>
          </div>

          <div className="space-y-6 opacity-0 animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-bold text-gray-800">Meet Your Health Coach</h3>
            <p className="text-gray-700">
              With over 15 years of experience in women's health, I'm passionate about helping women navigate the transformative journey of menopause with confidence and grace.
            </p>
            <p className="text-gray-700">
              My approach combines evidence-based strategies with holistic wellness principles to address the physical, emotional, and lifestyle aspects of menopause.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <Card className="bg-peri-lightpink border-none">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-peri-magenta mb-2">Certified Expert</h4>
                  <p className="text-sm text-gray-700">
                    Advanced certifications in hormonal health and menopause management
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-peri-lightpink border-none">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-peri-magenta mb-2">Personalized Plans</h4>
                  <p className="text-sm text-gray-700">
                    Customized solutions tailored to your unique symptoms and lifestyle
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
