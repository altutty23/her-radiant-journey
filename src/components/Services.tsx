
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, BookOpen, Users, Calendar } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-br from-white to-peri-lightpink py-16 md:py-24">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e60073] mb-4">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#e60073] rounded mb-6"></div>
          <p className="max-w-2xl text-gray-700 text-lg">
            Comprehensive perimenopause support designed to help you thrive during this transition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in animate-delay-100">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e60073] mb-4 mx-auto">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">1:1 Consultations</CardTitle>
              <CardDescription className="text-gray-600">
                Personal support with certified expertise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Get personalized guidance and support through virtual appointments with a certified perimenopause educator.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  HIPAA-compliant scheduling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Multiple communication options
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  No long-term commitment
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in animate-delay-200">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e60073] mb-4 mx-auto">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">Educational Resources</CardTitle>
              <CardDescription className="text-gray-600">
                Science-based information made simple
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Access comprehensive, evidence-based information about perimenopause presented in an engaging, understandable way.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Weekly newsletters
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Exclusive bonus content
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  No misinformation guarantee
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in animate-delay-300">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e60073] mb-4 mx-auto">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">Community Support</CardTitle>
              <CardDescription className="text-gray-600">
                Connect with the PeriSquad community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Join a supportive community of women navigating perimenopause together with shared experiences and encouragement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Inclusive environment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Q&A opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                  Peer support network
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 opacity-0 animate-fade-in animate-delay-400">
          <Button className="bg-[#e60073] hover:bg-[#d1005f] text-white rounded-full px-8 py-3">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
