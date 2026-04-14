import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, Server } from "lucide-react";
import logo from "@/assets/logo.png";

const LEARNING_URL = "https://learning.cognitoinsights.ai/";

const footerLinks = {
  "Training Programs": [
    { label: "IT Training", href: LEARNING_URL },
    { label: "Non-IT Training", href: LEARNING_URL },
    { label: "Corporate Upskilling", href: LEARNING_URL },
    { label: "Certification Courses", href: LEARNING_URL },
    { label: "Live Projects", href: LEARNING_URL },
  ],
  "Services": [
    { label: "Hiring Solutions", href: LEARNING_URL },
    { label: "Corporate Training", href: LEARNING_URL },
    { label: "Digital Platforms", href: LEARNING_URL },
    { label: "Assessment Solutions", href: LEARNING_URL },
    { label: "Custom Development", href: LEARNING_URL },
  ],
  "Industries": [
    { label: "Education", href: LEARNING_URL },
    { label: "IT & Software", href: LEARNING_URL },
    { label: "Government", href: LEARNING_URL },
    { label: "Corporate", href: LEARNING_URL },
    { label: "Startups", href: LEARNING_URL },
  ],
  "Company": [
    { label: "About Us", href: "/about", internal: true },
    { label: "Careers", href: LEARNING_URL },
    { label: "Blog", href: LEARNING_URL },
    { label: "Case Studies", href: LEARNING_URL },
    { label: "Contact", href: "/#contact", internal: true },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logo} 
                alt="CognitoInsights" 
                className="h-16 hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Transforming talent through technology. Industry-ready training, specialized hiring 
              models, and innovative software solutions for students, businesses, and institutions.
            </p>
            
            <div className="space-y-3 mb-6">
              <a 
                href="https://maps.google.com/?q=Rajahmundry,India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:animate-pulse" />
                <span>Rajahmundry, Andhra Pradesh, India</span>
              </a>
              <a 
                href="tel:+918978246111" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:animate-pulse" />
                <span>(+91) 8978246111, (+91) 8978247111</span>
              </a>
              <a 
                href="mailto:contact@cognitoinsights.ai" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 flex-shrink-0 group-hover:animate-pulse" />
                <span>contact@cognitoinsights.ai</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Fri: 09:00 - 20:00</p>
                  <p>Sat & Sun: 10:30 - 22:00</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.internal ? (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} CognitoInsights Solutions Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Server className="w-4 h-4 text-primary" />
              <span>Hosted on <span className="text-primary font-medium">Hostinger</span></span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
