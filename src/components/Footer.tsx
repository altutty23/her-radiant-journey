const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-800 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-left">
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={scrollToTop} className="text-gray-300 hover:text-peri-pink transition-colors text-left">Home</button></li>
              <li><button onClick={() => scrollToSection('perimenopause')} className="text-gray-300 hover:text-peri-pink transition-colors text-left">Perimenopause, huh?</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-peri-pink transition-colors text-left">About</button></li>
              <li><a href="/blog" className="text-gray-300 hover:text-peri-pink transition-colors text-left">Blog</a></li>
              <li><button onClick={() => scrollToSection('get-started')} className="text-gray-300 hover:text-peri-pink transition-colors text-left">Get Started</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-peri-pink">The Periprofessional, LLC</h3>
            <p className="text-gray-300 mb-4">
              Empowering women through their menopause journey with<br />
              expert guidance, personalized support, and compassionate care.<br />
              Navigate this transformative phase of life with confidence<br />
              and reclaim your well-being.
            </p>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} The Periprofessional, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;