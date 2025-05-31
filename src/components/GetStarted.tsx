import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Mail, Gift } from "lucide-react";
const GetStarted = () => {
  return <section id="get-started" className="bg-gradient-to-br from-peri-lightpink to-white py-16 md:py-0">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e60073] mb-4">
            <ArrowRight className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
          <div className="w-24 h-1 bg-[#e60073] rounded mb-6"></div>
          <p className="max-w-2xl text-gray-700 text-lg">
            Ready to take control of your perimenopause journey? Choose the support option that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Subscription */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in animate-delay-100 flex flex-col">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e60073] mb-4 mx-auto">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">Free Subscription</CardTitle>
              <CardDescription className="text-gray-600">Access to Substack and weekly newsletter</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-grow">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Weekly newsletter delivery
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Access to Substack content
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Exclusive bonus content
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  No payment required
                </li>
              </ul>
              <div className="text-center mb-4">
                <p className="text-2xl font-bold text-[#e60073] mb-2">Free</p>
                <p className="text-sm text-gray-600">Always free access</p>
              </div>
              <a href="https://theperiprofessional.substack.com/subscribe" target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button className="w-full bg-[#e60073] hover:bg-[#d1005f] text-white rounded-full">
                  Subscribe Free
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Paid Subscription */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in animate-delay-150 flex flex-col">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e60073] mb-4 mx-auto">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">Paid Subscription</CardTitle>
              <CardDescription className="text-gray-600">Upscaled expert advice delivered to your inbox weekly</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-grow">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Self-motivated learning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Written expertise in your inbox
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Ask Away Wednesday for direct Q&A access
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Discounts on 1:1 services
                </li>
              </ul>
              <div className="text-center mb-4">
                <p className="text-2xl font-bold text-[#e60073] mb-2">$7/month</p>
                <p className="text-sm text-gray-600">or $75 annually</p>
              </div>
              <a href="https://theperiprofessional.substack.com/subscribe" target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button className="w-full bg-[#e60073] hover:bg-[#d1005f] text-white rounded-full">
                  Subscribe Now
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* 1:1 Appointments */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in animate-delay-200 flex flex-col">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e60073] mb-4 mx-auto">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">Appointments</CardTitle>
              <CardDescription className="text-gray-600">
                Personal support with a certified perimenopause educator
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-grow">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Easy to schedule appointments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Privacy of your health information
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Live connection with certified educator
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  No long-term commitment
                </li>
              </ul>
              <a href="https://clientportal.us.zandahealth.com/clientportal/theperiprofessional" target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button className="w-full bg-[#e60073] hover:bg-[#d1005f] text-white rounded-full">
                  Schedule Now
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 opacity-0 animate-fade-in animate-delay-400">
          <p className="text-gray-600 mb-4">
            Not sure which option is right for you?
          </p>
          <a href="https://theperiprofessional.substack.com/p/paid-services" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-[#e60073] text-[#e60073] hover:bg-[#e60073] hover:text-white rounded-full">
              Learn More About Services
            </Button>
          </a>
        </div>
      </div>
    </section>;
};
export default GetStarted;