import { Button } from '@/components/ui/button';
const Hero = () => {
  return <div className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-peri-lightpink rounded-bl-[100px] -z-10 opacity-70"></div>
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-peri-pink opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-peri-purple opacity-20 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Embrace Your <span className="heading-gradient text-rose-500 text-[ffoo80]">Menopause</span> Journey With Confidence
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Expert guidance to help you navigate hormonal changes, reclaim your well-being, and thrive in this new chapter of life.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#get-started">
                <Button className="btn-primary">
                  Get Started
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="btn-secondary">
                  Explore Services
                </Button>
              </a>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-in animate-delay-200">
            <div className="relative z-10 bg-white p-3 rounded-2xl shadow-xl">
              <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/eZdaMN0Kje8?si=SLYbt7FYX0_T7sZf" title="The Periproffesional Introduction" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
              </iframe>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-6 -left-6 w-20 h-20 bg-peri-pink rounded-lg transform rotate-12 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-peri-magenta/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;