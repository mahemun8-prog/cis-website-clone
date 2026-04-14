import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Building2, GraduationCap, Users, Brain, BarChart3, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

const LEARNING_URL = "https://learning.cognitoinsights.ai/";

const caseStudies = [
  {
    title: "IT Workforce Upskilling for Fortune 500",
    industry: "Corporate",
    icon: Building2,
    challenge: "A leading MNC needed to upskill 500+ employees in cloud computing and DevOps within 6 months.",
    solution: "CognitoInsights designed a custom blended learning program with live projects, mentorship, and certification tracks.",
    results: ["95% completion rate", "40% productivity boost", "200+ certifications earned"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Campus-to-Corporate Training Pipeline",
    industry: "Education",
    icon: GraduationCap,
    challenge: "A university struggled with low placement rates due to skill gaps in students.",
    solution: "We implemented a 6-month industry-ready training program integrated into the final year curriculum.",
    results: ["85% placement rate", "30+ hiring partners", "1000+ students trained"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Government Digital Literacy Initiative",
    industry: "Government",
    icon: Users,
    challenge: "A state government aimed to digitize rural services but lacked trained personnel.",
    solution: "CognitoInsights delivered a large-scale Non-IT digital literacy program across 50+ centers.",
    results: ["10,000+ citizens trained", "50+ training centers", "3x digital adoption"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI-Powered Hiring for Startups",
    industry: "Startups",
    icon: Brain,
    challenge: "Rapid-growth startups needed pre-vetted tech talent without lengthy hiring cycles.",
    solution: "Our specialized hiring model provided interview-ready candidates with verified project portfolios.",
    results: ["70% faster hiring", "90% retention rate", "50+ startups served"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Assessment Platform for Institutions",
    industry: "Education",
    icon: BarChart3,
    challenge: "Educational institutions needed a scalable online assessment solution for remote examinations.",
    solution: "We built a custom assessment platform with AI-proctoring, auto-grading, and analytics dashboards.",
    results: ["100K+ assessments conducted", "99.9% uptime", "Real-time analytics"],
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Corporate Leadership Development",
    industry: "Corporate",
    icon: Briefcase,
    challenge: "A mid-size IT company needed to develop future leaders from within their engineering teams.",
    solution: "CognitoInsights designed a leadership bootcamp combining soft skills, project management, and strategic thinking.",
    results: ["30 leaders developed", "25% promotion rate", "Employee satisfaction up 45%"],
    color: "from-red-500 to-orange-500",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-40 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Success Stories</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Case <span className="text-gradient">Studies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results for real clients. See how CognitoInsights has transformed businesses, institutions, and careers.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.title} delay={index * 100}>
                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${study.color} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                    <study.icon className="w-full h-full text-white" />
                  </div>
                  
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 block">{study.industry}</span>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{study.title}</h3>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Challenge</p>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Solution</p>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="border-t border-border/50 pt-4">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Results</p>
                    <ul className="space-y-1">
                      {study.results.map((result) => (
                        <li key={result} className="text-sm font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {result}
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
              Start Your Success Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
