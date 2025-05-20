
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book a Consultation",
    description: "Schedule your free 30-minute discovery call to discuss your menopause concerns."
  },
  {
    number: "02",
    title: "Personalized Assessment",
    description: "Complete a comprehensive health assessment to identify your specific needs."
  },
  {
    number: "03",
    title: "Custom Action Plan",
    description: "Receive a tailored roadmap designed specifically for your menopause journey."
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Get continuous guidance and support as you implement your plan."
  }
];

const GetStarted = () => {
  return (
    <section id="get-started" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-peri-lightpink opacity-50 -z-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-peri-pink opacity-30 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-peri-pink mb-4">
            <Rocket className="h-5 w-5 text-peri-magenta" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
          <div className="w-24 h-1 bg-peri-magenta rounded mb-6"></div>
          <p className="max-w-2xl text-gray-700 text-lg">
            Your journey to better menopause management begins with these simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-md relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            >
              <div className="absolute -top-4 left-6 bg-gradient-to-r from-peri-magenta to-peri-purple text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                {step.number}
              </div>
              <div className="pt-6">
                <h3 className="font-bold text-lg mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 opacity-0 animate-fade-in animate-delay-400">
          <a href="#contact">
            <Button className="btn-primary text-lg px-10 py-6">
              Schedule Your Free Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
