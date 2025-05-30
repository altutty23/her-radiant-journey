
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="text-left">
            <h4 className="font-bold mb-6 text-white text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-peri-pink transition-colors duration-300 text-lg hover:translate-x-1 transform inline-block">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-peri-pink transition-colors duration-300 text-lg hover:translate-x-1 transform inline-block">About</a></li>
              <li><a href="#get-started" className="text-gray-300 hover:text-peri-pink transition-colors duration-300 text-lg hover:translate-x-1 transform inline-block">Get Started</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-peri-pink transition-colors duration-300 text-lg hover:translate-x-1 transform inline-block">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold text-white">
                <span className="bg-gradient-to-r from-peri-pink to-peri-magenta bg-clip-text text-transparent">Peri</span>
                <span className="text-white">Professional</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Empowering women through their menopause journey with expert guidance, personalized support, and compassionate care. Navigate this transformative phase of life with confidence and reclaim your well-being.
            </p>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-lg">© {new Date().getFullYear()} The Periproffesional. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
