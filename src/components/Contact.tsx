import { Mail } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-peri-pink mb-4">
            <Mail className="h-5 w-5 text-[#e60073]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-[#e60073] rounded mb-6"></div>
          <p className="max-w-2xl text-gray-700 text-lg">
            Have questions about our services or ready to start your journey? Reach out today.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="opacity-0 animate-fade-in animate-delay-100">
            <div className="bg-peri-lightpink p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e60073]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">hello@periproffesional.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e60073]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e60073]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Virtual consultations available worldwide</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-gray-800">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white p-2 rounded-full text-[#e60073] hover:bg-peri-pink transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full text-[#e60073] hover:bg-peri-pink transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full text-[#e60073] hover:bg-peri-pink transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;