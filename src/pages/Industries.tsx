import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, GraduationCap, Users, Brain, BarChart3, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

const LEARNING_URL = "https://learning.cognitoinsights.ai/";

const industries = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Empowering educational institutions with digital learning platforms, assessment tools, and faculty training programs.",
    solutions: ["LMS Implementation", "Digital Assessments", "Faculty Development", "Student Placement Support"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building2,
    title: "IT & Software",
    description: "Accelerating tech talent development with cutting-edge programming, cloud, and AI/ML training programs.",
    solutions: ["Full Stack Development", "Cloud Computing", "AI/ML Training", "DevOps & Automation"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Users,
    title: "Government",
    description: "Partnering with government bodies for large-scale digital literacy and skill development initiatives.",
    solutions: ["Digital Literacy Programs", "E-Governance Training", "Rural Outreach", "Certification Drives"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Briefcase,
    title: "Corporate",
    description: "Enabling enterprises to upskill their workforce and stay ahead of digital transformation challenges.",
    solutions: ["Corporate Upskilling", "Leadership Development", "Technical Workshops", "Change Management"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "Startups",
    description: "Providing startups with pre-vetted talent and tailored training to scale teams quickly and efficiently.",
    solutions: ["Talent Acquisition", "Team Training", "Product Development", "Agile Coaching"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Healthcare",
    description: "Bridging the digital skills gap in healthcare with specialized technology training and digital tools.",
    solutions: ["Healthcare IT", "Data Analytics", "Digital Records", "Telemedicine Training"],
    color: "from-teal-500 to-cyan-500",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-40 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Sectors We Serve</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Industries We <span className="text-gradient">Transform</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expertise spans across key industries, delivering customized training and technology solutions that create real-world impact.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.title} delay={index * 100}>
                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                    <industry.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{industry.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{industry.description}</p>
                  
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Key Solutions</p>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution) => (
                        <li key={solution} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              className="btn-shiny text-lg px-8 py-6 h-auto group"
              onClick={() => window.open(LEARNING_URL, "_blank")}
            >
              Explore Our Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
