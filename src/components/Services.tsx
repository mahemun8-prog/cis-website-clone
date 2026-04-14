import { Brain, BarChart3, MessageSquare, Eye, Cpu, Shield, Zap, Database } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const LEARNING_URL = "https://learning.cognitoinsights.ai/";

const services = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models tailored to your business needs with automated training and deployment.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for chatbots, sentiment analysis, and document processing.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image recognition, object detection, and visual inspection systems for any industry.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Data-driven forecasting and trend analysis to stay ahead of market changes.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Seamless integration of AI capabilities into your existing systems and workflows.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and infrastructure for AI-ready data management.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Protect your AI models and data with enterprise-grade security measures.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Real-time AI",
    description: "Edge computing and real-time AI inference for instant decision making.",
    color: "from-yellow-500 to-orange-500",
  },
];

export const Services = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Solutions
            </span>
            <h2 className="section-title mb-6">
              Empower Your Future with Our{" "}
              <span className="text-gradient">Industry-Focused</span>{" "}
              AI Programs
            </h2>
            <p className="section-subtitle mx-auto">
              Unlock your potential with expert-led, career-focused AI training that prepares you for the real world.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 80}>
              <div className="course-card group p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a 
                  href={LEARNING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1"
                >
                  Learn more →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
