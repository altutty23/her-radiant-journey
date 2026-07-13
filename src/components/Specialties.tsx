import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Brain, Activity, Stethoscope, BookOpen, Users, MessageCircle } from "lucide-react";

const specialties = [
  {
    icon: Heart,
    title: "Peri/Menopause Biology",
    description: "Understanding hormone changes, symptom patterns, and what's really happening to your body during the menopause transition."
  },
  {
    icon: Brain,
    title: "Mental & Emotional Health",
    description: "Anxiety, mood shifts, and brain fog can be caused by perimenopause. Midlife is a catalyst for reinvention and self-discovery with the right tools."
  },
  {
    icon: Activity,
    title: "Body Changes & Metabolism",
    description: "Weight distribution changes, hot flashes, skin and acne shifts, and practical strategies for a changing body at midlife."
  },
  {
    icon: Sparkles,
    title: "Sexual Health &\u00a0Vaginal/Bladder\n",
    description: "Real talk about vaginal and bladder health, sex, STDs, and maintaining intimacy through perimenopause and beyond."
  },
  {
    icon: Stethoscope,
    title: "Navigating Care",
    description: "Finding the right doctor, understanding menopause guidelines, and navigating our complex healthcare environment, so you can become your own best health advocate."
  },
  {
    icon: BookOpen,
    title: "Peri-Pro 101 Education",
    description: "Science-backed fundamentals made simple, translating complex health information into everyday language."
  },
  {
    icon: Users,
    title: "Workplace & Corporate Menopause",
    description: "Building menopause-ready organizations through employee education, leadership training, and supportive workplace strategies."
  },
  {
    icon: MessageCircle,
    title: "1:1 Consultations",
    description: "Personalized virtual support to answer your questions, review symptoms, and help you create a plan that fits your life. Meet once or often."
  }
];

const Specialties = () => {
  return (
    <section id="specialties" className="bg-white py-4 md:py-6">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-8 opacity-0 animate-fade-in">
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <Card
                key={specialty.title}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl opacity-0 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-peri-pink mb-4">
                    <Icon className="h-6 w-6 text-[#e60073]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 whitespace-pre-line">{specialty.title}</h3>
                  <p className="text-sm text-gray-700 whitespace-pre-line">{specialty.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
