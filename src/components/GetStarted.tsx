
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Mail } from "lucide-react";

const GetStarted = () => {
  return (
    <section id="get-started" className="bg-gradient-to-br from-peri-lightpink to-white py-16 md:py-24">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in animate-delay-100">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e60073] mb-4 mx-auto">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">1:1 Appointments</CardTitle>
              <CardDescription className="text-gray-600">
                Personal support with a certified perimenopause educator
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-gray-700">
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
              <Button className="w-full bg-[#e60073] hover:bg-[#d1005f] text-white rounded-full">
                Schedule Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in animate-delay-200">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e60073] mb-4 mx-auto">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">Paid Subscription</CardTitle>
              <CardDescription className="text-gray-600">
                Expert advice delivered to your inbox monthly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-gray-700">
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
                  Direct Q&A access
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Discounts on 1:1 services
                </li>
              </ul>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#e60073] mb-2">$7/month</p>
                <p className="text-sm text-gray-600 mb-4">or $75 annually</p>
              </div>
              <Button className="w-full bg-[#e60073] hover:bg-[#d1005f] text-white rounded-full">
                Subscribe Now
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 opacity-0 animate-fade-in animate-delay-300">
          <p className="text-gray-600 mb-4">
            Not sure which option is right for you?
          </p>
          <Button variant="outline" className="border-[#e60073] text-[#e60073] hover:bg-[#e60073] hover:text-white rounded-full">
            Learn More About Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
