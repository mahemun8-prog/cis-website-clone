import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone, Award, Target } from "lucide-react";

interface LeaderBio {
  name: string;
  designation: string;
  phone: string;
  email: string;
  shortBio: string;
  fullBio: string;
  expertise?: string[];
  image?: string;
}

interface LeadershipPopupProps {
  isOpen: boolean;
  onClose: () => void;
  leader: LeaderBio | null;
}

export function LeadershipPopup({ isOpen, onClose, leader }: LeadershipPopupProps) {
  if (!leader) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">{leader.name}</DialogTitle>
          <p className="text-muted-foreground font-medium">{leader.designation}</p>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:${leader.phone}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {leader.phone}
            </a>
            <a 
              href={`mailto:${leader.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              {leader.email}
            </a>
          </div>

          <div className="prose prose-invert max-w-none">
            <div 
              className="text-muted-foreground leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: leader.fullBio }}
            />
          </div>

          {leader.expertise && leader.expertise.length > 0 && (
            <div className="border-t border-border pt-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Key Expertise
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {leader.expertise.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export const leadershipData: LeaderBio[] = [
  {
    name: "Anitha Vaddi",
    designation: "Chief Executive Officer (CEO)",
    phone: "+91 87906 82929",
    email: "anitha.vaddi@cognitoinsights.ai",
    shortBio: "Strategic CEO with 21+ years in software architecture and cross-functional leadership, specializing in tech-led process redesign and multi-market expansions.",
    fullBio: `<strong>Chief Executive Officer | Enterprise Strategist | Digital Transformation Leader</strong>

Strategic CEO known for navigating the intersection of emerging technology and global business complexity. With a 21-year career rooted in software architecture and cross-functional leadership, I specialize in ruthlessly protecting margins through tech-led process redesign while spearheading multi-market expansions.`,
    expertise: [
      "Enterprise Strategy & Digital Transformation",
      "Software Architecture & Systems Design",
      "Cross-functional Leadership",
      "Multi-market Expansion",
      "Tech-led Process Redesign",
      "Margin Optimization"
    ]
  },
  {
    name: "Rajesh Kumar",
    designation: "Chief Technology Officer (CTO)",
    phone: "+91 87906 82930",
    email: "rajesh.kumar@cognitoinsights.ai",
    shortBio: "Visionary CTO with 15+ years of experience in AI, cloud computing, and enterprise software development.",
    fullBio: `<strong>Chief Technology Officer | AI & Cloud Architecture Expert</strong>

Visionary technology leader with a deep passion for AI and cloud-native architectures. Leading the technical vision and strategy at CognitoInsights, driving innovation across our product suite and ensuring world-class engineering practices.`,
    expertise: [
      "Artificial Intelligence & Machine Learning",
      "Cloud Architecture (AWS, Azure, GCP)",
      "Enterprise Software Development",
      "DevOps & CI/CD",
      "Team Leadership & Mentoring",
      "Product Strategy"
    ]
  }
];
