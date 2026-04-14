import { useState } from "react";
import { Target, Lightbulb, Users, Rocket, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadershipPopup, leadershipData } from "@/components/LeadershipPopup";
import logo from "@/assets/logo.png";

const values = [
  {
    icon: Target,
    title: "Industry-Relevant Skills",
    description: "Training aligned with real-world tools, technologies, and job roles."
  },
  {
    icon: Lightbulb,
    title: "Technology-Driven Learning",
    description: "Modern teaching methodologies supported by digital platforms."
  },
  {
    icon: Users,
    title: "Inclusive Opportunities",
    description: "Empowering both tech and non-tech learners with equal growth opportunities."
  },
  {
    icon: Rocket,
    title: "Career Enablement",
    description: "Focused on employability through structured learning and professional guidance."
  }
];

const missionPoints = [
  "Providing job-oriented IT and Non-IT training",
  "Delivering hands-on, practical learning experiences",
  "Supporting career development and employability",
  "Offering corporate training and workforce upskilling",
  "Building scalable digital learning and assessment platforms"
];

export default function About() {
  const [selectedLeader, setSelectedLeader] = useState<typeof leadershipData[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleReadMore = (leader: typeof leadershipData[0]) => {
    setSelectedLeader(leader);
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <img 
              src={logo} 
              alt="CognitoInsights Solutions Pvt Ltd" 
              className="h-32 md:h-40 mx-auto mb-8 animate-float"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              CognitoInsights Solutions Pvt. Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                CognitoInsights Solutions Pvt. Ltd. is a technology-driven training and solutions company 
                located in <span className="text-primary font-semibold">Rajahmundry, Andhra Pradesh</span>, 
                committed to transforming talent through education, innovation, and digital enablement. 
                We specialize in delivering industry-ready training programs, corporate upskilling, 
                hiring solutions, and software platforms that bridge the gap between learning and 
                real-world employment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong focus on practical learning and outcome-based education, CognitoInsights 
                empowers students, professionals, businesses, and institutions to succeed in today's 
                fast-evolving digital ecosystem. Our programs are designed to align with current industry 
                needs, ensuring learners gain relevant skills, hands-on experience, and career confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <ul className="space-y-4">
              {missionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipData.map((leader) => (
              <div key={leader.name} className="bg-card border border-border rounded-2xl p-8">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{leader.name}</h3>
                <p className="text-primary text-sm text-center mb-4">{leader.designation}</p>
                <p className="text-muted-foreground text-sm text-center mb-6">{leader.shortBio}</p>
                <button
                  onClick={() => handleReadMore(leader)}
                  className="w-full py-2 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm font-medium"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <LeadershipPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        leader={selectedLeader}
      />
    </div>
  );
}
