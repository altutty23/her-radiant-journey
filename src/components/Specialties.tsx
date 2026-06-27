import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Brain, Activity, Stethoscope, BookOpen, Users, MessageCircle } from "lucide-react";

const specialties = [
  {
    icon: Heart,
    title: "Perimenopause Biology",
    description: "Understanding hormone changes, symptom patterns, and what's really happening to your body during the menopause transition."
  },
  {
    icon: Brain,
    title: "Mental & Emotional Health",
    description: "Navigating anxiety, mood shifts, brain fog, and using midlife as a catalyst for reinvention and self-discovery."
  },
  {
    icon: Activity,
    title: "Body Changes & Metabolism",
    description: "Weight distribution changes, skin and acne shifts, and practical strategies for a changing body at midlife."
  },
  {
    icon: Sparkles,
    title: "Sexual Health & Intimacy",
    description: "Real talk about sex, STIs, vaginal health, and maintaining intimacy through perimenopause and beyond."
  },
  {
    icon: Stethoscope,
    title: "Navigating Care",
    description: "Finding the right doctor, understanding menopause guidelines, and becoming your own best health advocate."
  },
  {
    icon: BookOpen,
    title: "Peri-Pro 101 Education",
    description: "Science-backed fundamentals made simple—translating complex health information into everyday language."
  },
  {
    icon: Users,
    title: "Workplace & Corporate Menopause",
    description: "Building menopause-ready organizations through employee education, leadership training, and supportive workplace strategies."
  },
  {
    icon: MessageCircle,
    title: "1:1 Consultations",
    description: "Personalized virtual support to answer your questions, review symptoms, and help you create a plan that fits your life."
  }
];

const Specialties = () => {
  return (
    <section id="specialties" className="bg-white py-8 md:py-12">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-12 opacity-0 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-peri-pink mb-4">
            <Sparkles className="h-5 w-5 text-[#e60073]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialties & Topic Areas</h2>
          <div className="w-24 h-1 bg-[#e60073] rounded mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">
            From hormones to hot flashes, I cover the topics that matter most during the menopause transition.
          </p>
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{specialty.title}</h3>
                  <p className="text-sm text-gray-700">{specialty.description}</p>
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
