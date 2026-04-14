import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
}

export const PopupForm = ({ isOpen, onClose, title, subtitle }: PopupFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            {title}
          </DialogTitle>
          <p className="text-muted-foreground">{subtitle}</p>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="py-8 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground">We'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <Input
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-secondary/50 border-border focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <Input
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-secondary/50 border-border focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone *</label>
              <Input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-secondary/50 border-border focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company/Organization</label>
              <Input
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-secondary/50 border-border focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px] transition-colors"
              />
            </div>
            <Button type="submit" className="btn-shiny w-full text-lg py-6 h-auto group">
              Submit Request
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
