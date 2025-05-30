import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };
  const scrollToTop = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };
  const handleBlogClick = () => {
    navigate('/blog');
    setMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl text-black">The </span>
              <span className="font-bold text-2xl text-[#e60073]">‎ Periprofessional</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={scrollToTop} className="text-gray-700 hover:text-[#e60073] font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('perimenopause')} className="text-gray-700 hover:text-[#e60073] font-medium transition-colors">
              Perimenopause, huh?
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#e60073] font-medium transition-colors">
              About
            </button>
            <button onClick={handleBlogClick} className="text-gray-700 hover:text-[#e60073] font-medium transition-colors">
              Blog
            </button>
            <button onClick={() => scrollToSection('get-started')}>
              <Button className="text-white rounded-full bg-[#e60073] hover:bg-[#d1005f]">
                Get Started
              </Button>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-[#e60073] focus:outline-none">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <button onClick={scrollToTop} className="block text-gray-700 hover:text-[#e60073] font-medium py-2 w-full text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('perimenopause')} className="block text-gray-700 hover:text-[#e60073] font-medium py-2 w-full text-left">
              Perimenopause, huh?
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-[#e60073] font-medium py-2 w-full text-left">
              About
            </button>
            <button onClick={handleBlogClick} className="block text-gray-700 hover:text-[#e60073] font-medium py-2 w-full text-left">
              Blog
            </button>
            <button onClick={() => scrollToSection('get-started')} className="block text-gray-700 hover:text-[#e60073] font-medium py-2 w-full text-left">
              Get Started
            </button>
          </div>
        </div>}
    </header>;
};
export default Header;