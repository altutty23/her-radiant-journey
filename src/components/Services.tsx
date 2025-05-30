
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { List } from "lucide-react";

const ServicesData = [
  {
    title: "1:1 Coaching",
    description: "Personalized coaching sessions tailored to your specific menopause concerns and health goals.",
    features: ["Weekly private sessions", "Custom action plans", "Priority support", "Progress tracking"],
    popular: true,
  },
  {
    title: "Group Workshops",
    description: "Join a community of women navigating menopause with guided education and support.",
    features: ["Monthly live workshops", "Q&A sessions", "Community support", "Resource library"],
    popular: false,
  },
  {
    title: "Hormone Balance Plan",
    description: "Comprehensive plan to optimize your hormonal health through nutrition, movement, and lifestyle.",
    features: ["Hormone assessment", "Nutrition guidance", "Exercise protocols", "Supplement recommendations"],
    popular: false,
  },
  {
    title: "Menopause Mastery Course",
    description: "Self-paced online course covering all aspects of menopause management and symptom relief.",
    features: ["Lifetime access", "Video modules", "Downloadable tools", "Monthly group calls"],
    popular: false,
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-peri-pink mb-4">
            <List className="h-5 w-5 text-[#e60073]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services & Programs</h2>
          <div className="w-24 h-1 bg-[#e60073] rounded mb-6"></div>
          <p className="max-w-2xl text-gray-700 text-lg">
            Specialized offerings designed to support your unique menopause journey and help you thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ServicesData.map((service, index) => (
            <Card key={index} className={`overflow-hidden border-none shadow-md transition-all duration-200 hover:shadow-lg ${
              service.popular ? 'ring-2 ring-[#e60073]' : ''
            } opacity-0 animate-fade-in`} style={{ animationDelay: `${index * 100 + 100}ms` }}>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                  {service.popular && <Badge className="bg-[#e60073]">Popular</Badge>}
                </div>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-[#e60073] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
