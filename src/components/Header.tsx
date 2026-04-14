import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PopupForm } from "@/components/PopupForm";
import logo from "@/assets/logo.png";

const LEARNING_URL = "https://learning.cognitoinsights.ai/";

const navItems = [
  { 
    label: "Training Programs", 
    href: LEARNING_URL,
    external: true,
    dropdown: ["IT Training", "Non-IT Training", "Corporate Upskilling", "Certification Courses"]
  },
  { 
    label: "Services", 
    href: LEARNING_URL,
    external: true,
    dropdown: ["Hiring Solutions", "Corporate Training", "Digital Learning Platforms", "Assessment Solutions"]
  },
  { 
    label: "Industries", 
    href: "/industries",
    external: false,
  },
  { label: "Case Studies", href: "/case-studies", external: false },
  { label: "About", href: "/about", external: false },
  { label: "Blog", href: "https://learning.cognitoinsights.ai/blog/", external: true },
];

type PopupType = "webinar" | "enterprise" | "partners" | null;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  const navigate = useNavigate();

  const popupConfig = {
    webinar: {
      title: "Register for Free Webinar",
      subtitle: "Join our upcoming webinar and learn from industry experts"
    },
    enterprise: {
      title: "Enterprise Solutions",
      subtitle: "Get customized training solutions for your organization"
    },
    partners: {
      title: "Become a Partner",
      subtitle: "Join our partner network and grow together"
    }
  };

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    if (item.external) {
      window.open(item.href, "_blank");
    } else {
      e.preventDefault();
      navigate(item.href);
    }
    setIsOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        {/* Top bar */}
        <div className="border-b border-border/30 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-10 text-sm">
              <div className="hidden md:flex items-center gap-6 text-muted-foreground">
                <button 
                  onClick={() => setActivePopup("webinar")} 
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Free Webinar
                </button>
                <button 
                  onClick={() => setActivePopup("enterprise")} 
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Enterprise
                </button>
                <button 
                  onClick={() => setActivePopup("partners")} 
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Partners
                </button>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground ml-auto">
                <a href="tel:+918978246111" className="hover:text-primary transition-colors">(+91) 8978246111</a>
                <span className="text-border">|</span>
                <a href="tel:+918978247111" className="hover:text-primary transition-colors">(+91) 8978247111</a>
                <a href="mailto:contact@cognitoinsights.ai" className="hover:text-primary transition-colors hidden lg:inline">contact@cognitoinsights.ai</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="CognitoInsights" className="h-10 hover:scale-105 transition-transform" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-3 h-3" />}
                  </a>
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-xl shadow-xl py-2 z-50">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub}
                          href={LEARNING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open(LEARNING_URL, "_blank")}
              >
                Login
              </Button>
              <Button 
                size="sm"
                className="btn-shiny"
                onClick={scrollToContact}
              >
                Request Demo
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <div className="flex gap-4 pb-3 border-b border-border/30">
                <button 
                  onClick={() => { setActivePopup("webinar"); setIsOpen(false); }}
                  className="text-sm text-primary"
                >
                  Free Webinar
                </button>
                <button 
                  onClick={() => { setActivePopup("enterprise"); setIsOpen(false); }}
                  className="text-sm text-primary"
                >
                  Enterprise
                </button>
                <button 
                  onClick={() => { setActivePopup("partners"); setIsOpen(false); }}
                  className="text-sm text-primary"
                >
                  Partners
                </button>
              </div>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className="py-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <Button 
                  variant="ghost" 
                  className="w-full justify-center"
                  onClick={() => { window.open(LEARNING_URL, "_blank"); setIsOpen(false); }}
                >
                  Login
                </Button>
                <Button 
                  className="btn-shiny w-full justify-center"
                  onClick={() => { scrollToContact(); setIsOpen(false); }}
                >
                  Request Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {activePopup && (
        <PopupForm
          isOpen={!!activePopup}
          onClose={() => setActivePopup(null)}
          title={popupConfig[activePopup].title}
          subtitle={popupConfig[activePopup].subtitle}
        />
      )}
    </>
  );
};
