import { Link } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";

export default function About() {
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
              <Info className="w-6 h-6 text-primary" />
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-foreground">
              ABOUT <span className="text-primary">RED LINE TIMER</span>
            </h1>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="text-foreground/90 font-medium">
              Red Line Timer is a real-time countdown website tracking the latest developments in the ongoing Iran–United States conflict and global geopolitical deadlines.
            </p>
            <p>
              The platform focuses on the current crisis involving Iran, the United States, and the strategic Strait of Hormuz, one of the most important shipping routes in the world.
            </p>

            <h2 className="font-display text-lg sm:text-xl font-bold tracking-wider text-foreground pt-4">
              What is happening <span className="text-primary">right now?</span>
            </h2>
            <p>
              The current conflict began in early 2026 following escalating tensions between Iran, the United States, and Israel. Military strikes, retaliations, and economic disruptions have created one of the most serious global crises in recent years.
            </p>
            <p>
              Iran has restricted access to the Strait of Hormuz, a key waterway through which around 20% of the world's oil supply normally passes. This has caused major disruptions to global energy markets and shipping routes.
            </p>
            <p>
              In response, the United States launched military operations aimed at reopening the strait and restoring international trade. The situation continues to evolve rapidly with ongoing strikes, diplomatic talks, and global reactions.
            </p>

            <h2 className="font-display text-lg sm:text-xl font-bold tracking-wider text-foreground pt-4">
              Latest deadline and <span className="text-primary">updates</span>
            </h2>
            <p>
              Recent statements from Donald Trump have included strict deadlines for Iran to reopen the Strait of Hormuz. The most recent deadline is set for:
            </p>
            <p className="text-primary font-display tracking-wider font-bold text-center py-2">
              Tuesday, 8:00 PM Eastern Time
            </p>
            <p>
              Failure to meet this deadline could result in further escalation, including potential strikes on infrastructure targets.
            </p>
            <p>
              At the same time, there are ongoing negotiations and proposals for a ceasefire, including plans for a temporary truce and further diplomatic discussions.
            </p>

            <h2 className="font-display text-lg sm:text-xl font-bold tracking-wider text-foreground pt-4">
              Why this matters <span className="text-primary">globally</span>
            </h2>
            <p>The Iran–USA conflict is not just a regional issue. It affects:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Global oil prices</li>
              <li>International shipping</li>
              <li>Financial markets</li>
              <li>Security in the Middle East</li>
            </ul>
            <p>
              The Strait of Hormuz is one of the most critical choke points in the world, and any disruption has immediate worldwide impact.
            </p>

            <h2 className="font-display text-lg sm:text-xl font-bold tracking-wider text-foreground pt-4">
              What Red Line Timer <span className="text-primary">does</span>
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>The latest Iran deadline countdown</li>
              <li>Live updates on the conflict</li>
              <li>Key geopolitical developments</li>
            </ul>
            <p>
              Instead of reading complex news, users can instantly see how much time remains until the next major deadline.
            </p>

            <div className="border-t border-border/50 pt-6 mt-8">
              <p className="text-xs text-muted-foreground/60 italic">
                Disclaimer: This website is for informational purposes only and tracks publicly reported news and deadlines from reliable sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
