
import { useState, useEffect } from 'react';

const SideSlider = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="relative h-64 w-2 bg-gray-200 rounded-full">
        <div 
          className="absolute bottom-0 w-full bg-gradient-to-t from-[#e60073] to-peri-pink rounded-full transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
        <div 
          className="absolute w-4 h-4 bg-[#e60073] rounded-full border-2 border-white shadow-lg transform -translate-x-1 transition-all duration-300 ease-out"
          style={{ 
            top: `${100 - scrollProgress}%`, 
            transform: `translateX(-1px) translateY(-50%)` 
          }}
        />
      </div>
    </div>
  );
};

export default SideSlider;
