import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVentures Inc.",
    content: "CognitoInsights transformed our data analytics capabilities. Their ML models reduced our prediction errors by 40% and saved us millions in operational costs.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Director of Innovation, GlobalBank",
    content: "The NLP solutions they implemented revolutionized our customer service. Response times dropped by 60% while customer satisfaction soared.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of Research, MedTech Solutions",
    content: "Their computer vision expertise helped us develop diagnostic tools that are now saving lives. Truly exceptional technical capabilities and support.",
    rating: 5,
    avatar: "EW",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Testimonials
            </span>
            <h2 className="section-title mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Don't just take our word for it. See how we've helped enterprises transform their operations with AI.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 150}>
              <div className="card-gradient border border-border/50 rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-500">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
