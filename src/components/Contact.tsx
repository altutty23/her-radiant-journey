import { Mail, Globe, Linkedin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    console.log("Submitting contact form:", formData);
    try {
      // Create form data to send as separate fields
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      const response = await fetch("https://hook.us2.make.com/5wanbi1o29ol530stdgpuryvkj1awcf1", {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend
      });
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <section id="contact" className="bg-white py-8 md:py-12">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-peri-pink mb-4">
            <Mail className="h-5 w-5 text-[#e60073]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <div className="w-24 h-1 bg-[#e60073] rounded mb-6"></div>
          <p className="max-w-2xl text-gray-700 text-lg">Have questions about our services before you make a decision? ‎ ‎ ‎ Message me below.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="opacity-0 animate-fade-in animate-delay-100">
            <div className="bg-peri-lightpink p-8 rounded-2xl h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Learn More</h3>
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-[#e60073]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Newsletter Archive</h4>
                    <a href="https://theperiprofessional.substack.com/" target="_blank" rel="noopener noreferrer" className="text-[#e60073] hover:underline">
                      theperiprofessional.substack.com
                    </a>
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
                  <a href="https://www.threads.com/@theperiprofessional" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-[#e60073] hover:bg-peri-pink transition-colors">
                    <img src="/lovable-uploads/09d52609-fe44-4dd0-a9a1-b1ef21e6625c.png" alt="Threads" className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/theperiprofessional" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-[#e60073] hover:bg-peri-pink transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 11 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/theperiprofessional" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-[#e60073] hover:bg-peri-pink transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/shelby-tutty/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-[#e60073] hover:bg-peri-pink transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://bsky.app/profile/periprofessional.bsky.social" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-[#e60073] hover:bg-peri-pink transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364-.136-.02.275-.039.415-.056-.138.017.276.036.415.056 2.67.296 5.568-.628 6.383-3.364C.378 9.418 0 4.458 0 3.768c0-.688.139-1.86.902-2.203C1.561 1.266 2.566.944 5.202 2.805c2.752 1.942 5.711 5.881 6.798 7.995 1.087-2.114 4.046-6.053 6.798-7.995C21.434.944 22.439 1.266 23.098 1.565c.763.343.902 1.515.902 2.203 0 .69-.378 5.65-.624 6.479-.815 2.736-3.713 3.66-6.383 3.364-.139-.017-.277-.034-.415-.056.138.017.276.036.415.056 2.67.296 5.568-.628 6.383-3.364.246-.829.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24-2.752 1.942-5.711 5.881-6.798 7.995z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="opacity-0 animate-fade-in animate-delay-200">
            <div className="bg-peri-lightpink p-8 rounded-2xl h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Message</h3>
              <div className="flex-grow flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </Label>
                    <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-white border-gray-300 focus:border-[#e60073] focus:ring-[#e60073]" placeholder="Your full name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </Label>
                    <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="bg-white border-gray-300 focus:border-[#e60073] focus:ring-[#e60073]" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="bg-white border-gray-300 focus:border-[#e60073] focus:ring-[#e60073]" placeholder="Tell us how we can help you..." />
                  </div>
                  
                  <Button type="submit" disabled={isLoading} className="w-full bg-[#e60073] hover:bg-[#d1005f] text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50">
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
