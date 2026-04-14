import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div className="prose prose-invert max-w-none space-y-8 animate-slide-up">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, 
                  request information, or contact us for support. This may include your name, email address, 
                  phone number, and company information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to comments, questions, and requests</li>
                  <li>Monitor and analyze usage patterns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personally identifiable information to 
                  outside parties without your consent, except to trusted third parties who assist us in 
                  operating our website and conducting our business, subject to confidentiality agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized or unlawful processing, accidental loss, destruction, 
                  or damage. We use industry-standard encryption and security protocols.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:contact@cognitoinsights.ai" className="text-primary hover:underline">
                    contact@cognitoinsights.ai
                  </a>{" "}
                  or call us at (+91) 8978246111.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
