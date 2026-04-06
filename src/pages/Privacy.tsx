import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 pt-12 sm:pt-20 pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Timer
        </Link>

        <div className="glass-card p-6 sm:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-foreground">
                PRIVACY <span className="text-primary">POLICY</span>
              </h1>
              <p className="text-xs text-muted-foreground mt-1">Last updated: April 2026</p>
            </div>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-base font-bold tracking-wider text-foreground mb-2">1. Introduction</h2>
              <p>Welcome to Red Line Timer. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.</p>
            </section>

            <section>
              <h2 className="font-display text-base font-bold tracking-wider text-foreground mb-2">2. Information We Collect</h2>
              <p>We may collect:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>Basic usage data (such as pages visited, time on site)</li>
                <li>Information you provide through the contact form (name, email, message)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-base font-bold tracking-wider text-foreground mb-2">3. How We Use Information</h2>
              <p>We use collected data to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>Improve the website experience</li>
                <li>Respond to contact inquiries</li>
                <li>Monitor site performance</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-base font-bold tracking-wider text-foreground mb-2">4. Cookies</h2>
              <p>This website may use cookies to analyze traffic, improve functionality, and support advertising services (such as Google AdSense). You can disable cookies in your browser settings.</p>
            </section>

            <section>
              <h2 className="font-display text-base font-bold tracking-wider text-foreground mb-2">5. Third-Party Services</h2>
              <p>We may use third-party services such as Google AdSense (for ads) and analytics tools. These services may collect information according to their own privacy policies.</p>
            </section>

            <section>
              <h2 className="font-display text-base font-bold tracking-wider text-foreground mb-2">6. Data Protection</h2>
              <p>We take reasonable steps to protect your information but cannot guarantee complete security.</p>
            </section>

            <section>
              <h2 className="font-display text-base font-bold tracking-wider text-foreground mb-2">7. Your Rights</h2>
              <p>You may request deletion of your personal data by <Link to="/contact" className="text-primary hover:underline">contacting us</Link>.</p>
            </section>

            <section>
              <h2 className="font-display text-base font-bold tracking-wider text-foreground mb-2">8. Contact</h2>
              <p>If you have any questions, please contact us via the <Link to="/contact" className="text-primary hover:underline">contact page</Link>.</p>
            </section>

            <section>
              <h2 className="font-display text-base font-bold tracking-wider text-foreground mb-2">9. Changes</h2>
              <p>We may update this policy at any time. Changes will be posted on this page.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
