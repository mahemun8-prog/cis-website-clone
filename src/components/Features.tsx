import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/ScrollReveal";

const LEARNING_URL = "https://learning.cognitoinsights.ai/";

const features = [
  "Expert AI consultants with 10+ years experience",
  "Custom solutions tailored to your industry",
  "24/7 support and maintenance",
  "Seamless integration with existing systems",
  "Scalable architecture for growth",
  "Data security and compliance guaranteed",
];

export const Features = () => {
  return (
    <section id="about" className="py-24 bg-secondary/20 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Why Choose Us
              </span>
              <h2 className="section-title mb-6">
                One Platform,{" "}
                <span className="text-gradient">Infinite Possibilities</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We combine deep technical expertise with industry knowledge to deliver AI solutions 
                that create measurable business impact. Our team of experts works closely with you 
                to understand your unique challenges and craft tailored solutions.
              </p>

              <ul className="space-y-4 mb-10">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="btn-shiny group"
                onClick={() => window.open(LEARNING_URL, "_blank")}
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl hover:shadow-primary/10 transition-shadow duration-500">
              <h3 className="text-2xl font-bold mb-6">Request a Callback</h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" className="bg-secondary/50 border-border focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" className="bg-secondary/50 border-border focus:border-primary transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john@company.com" className="bg-secondary/50 border-border focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input type="tel" placeholder="+91 98765 43210" className="bg-secondary/50 border-border focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company/Institution</label>
                  <Input placeholder="Your Organization" className="bg-secondary/50 border-border focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    placeholder="Tell us about your training needs..."
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px] transition-colors"
                  />
                </div>
                <Button className="btn-shiny w-full text-lg py-6 h-auto group">
                  Submit Request
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
