
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-left">
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-peri-pink transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-peri-pink transition-colors">About</a></li>
              <li><a href="#get-started" className="text-gray-300 hover:text-peri-pink transition-colors">Get Started</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-peri-pink transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-peri-pink">The Periproffesional</h3>
            <p className="text-gray-300 mb-4">
              Empowering women through their menopause journey with<br />
              expert guidance, personalized support, and compassionate care.<br />
              Navigate this transformative phase of life with confidence<br />
              and reclaim your well-being.
            </p>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} The Periproffesional. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
