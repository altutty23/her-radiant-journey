
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-white via-peri-lightpink/30 to-white">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-peri-lightpink/40 to-transparent rounded-bl-[100px] -z-10"></div>
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-peri-pink/40 to-peri-magenta/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-peri-purple/30 to-[#e60073]/10 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-peri-pink/20 to-peri-lightpink/30 rounded-full border border-peri-pink/30 backdrop-blur-sm">
              <span className="text-sm font-medium text-[#e60073]">✨ Expert Menopause Guidance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Embrace Your <span className="bg-gradient-to-r from-[#e60073] via-peri-magenta to-peri-purple bg-clip-text text-transparent">Menopause</span> Journey With Confidence
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Expert guidance to help you navigate hormonal changes, reclaim your well-being, and thrive in this new chapter of life.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#get-started">
                <Button className="bg-gradient-to-r from-[#e60073] to-peri-magenta text-white rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Get Started
                </Button>
              </a>
              <a href="https://theperiprofessional.substack.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-2 border-[#e60073] text-[#e60073] rounded-full px-8 py-4 font-semibold text-lg hover:bg-[#e60073]/5 backdrop-blur-sm transition-all duration-300">
                  Explore Services
                </Button>
              </a>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-in animate-delay-200">
            <div className="relative z-10 bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-2xl border border-white/50">
              <iframe className="w-full aspect-video rounded-2xl" src="https://www.youtube.com/embed/eZdaMN0Kje8?si=SLYbt7FYX0_T7sZf" title="The Periproffesional Introduction" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
              </iframe>
            </div>
            {/* Enhanced Decorative elements */}
            <div className="absolute top-8 -left-8 w-24 h-24 bg-gradient-to-br from-peri-pink to-peri-magenta/60 rounded-2xl transform rotate-12 -z-10 shadow-lg"></div>
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-tl from-peri-magenta/30 to-peri-purple/20 rounded-full -z-10 blur-sm"></div>
            <div className="absolute top-1/2 -right-12 w-4 h-32 bg-gradient-to-b from-[#e60073]/60 to-transparent rounded-full -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-400">
        <ChevronDown className="h-8 w-8 text-[#e60073] animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;
