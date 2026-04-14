import { ArrowRight, Play, Sparkles, GraduationCap, Briefcase, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LEARNING_URL = "https://learning.cognitoinsights.ai/";

export const Hero = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen hero-gradient overflow-x-hidden overflow-y-visible pt-32 pb-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="absolute top-40 right-20 hidden xl:block animate-float">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur border border-primary/20 flex items-center justify-center animate-glow">
          <GraduationCap className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-60 left-20 hidden xl:block animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur border border-blue-500/20 flex items-center justify-center">
          <Code className="w-6 h-6 text-blue-400" />
        </div>
      </div>
      <div className="absolute bottom-40 right-32 hidden xl:block animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur border border-green-500/20 flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-green-400" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Training & Solutions Company</span>
          </div>

          <h1 className="section-title text-4xl md:text-5xl lg:text-7xl mb-6 animate-slide-up">
            Transform Your Career with{" "}
            <span className="text-gradient">Industry-Ready</span>{" "}
            Training
          </h1>

          <p className="section-subtitle mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            CognitoInsights Solutions Pvt. Ltd. empowers students, professionals, and businesses with 
            job-oriented IT & Non-IT training, corporate upskilling, and innovative digital learning platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="btn-shiny text-lg px-8 py-6 h-auto group"
              onClick={() => window.open(LEARNING_URL, "_blank")}
            >
              Start Learning
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="ghost" 
              className="text-lg px-8 py-6 h-auto text-muted-foreground hover:text-foreground group border border-border hover:border-primary/50 transition-colors"
              onClick={scrollToContact}
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Request Demo
            </Button>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-muted-foreground mb-6 text-sm uppercase tracking-wider">What We Offer</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {["IT Training", "Non-IT Training", "Corporate Upskilling", "Hiring Solutions", "Digital Platforms"].map((feature) => (
                <span 
                  key={feature} 
                  className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all cursor-default"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
