import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "@/components/CountdownTimer";
import RedLine from "@/components/RedLine";
import NewsFeed from "@/components/NewsFeed";
import DeadlineHistory from "@/components/DeadlineHistory";
import ShareButtons from "@/components/ShareButtons";
import { Radio } from "lucide-react";

function LastUpdated() {
  const [timestamp, setTimestamp] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTimestamp(new Date()), 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-6 sm:mt-8 mb-12 sm:mb-16 px-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground font-display tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Last updated: {timestamp.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })}
      </div>
      <ShareButtons />
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Hero */}
        <header className="flex flex-col items-center pt-16 sm:pt-24 md:pt-32 px-4">
          <div className="flex items-center gap-2 mb-4">
            <Radio className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-display uppercase tracking-[0.4em] text-primary/70">
              Live
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.15em] text-foreground text-glow mb-3 sm:mb-4 text-center">
            RED LINE <span className="text-primary">TIMER</span>
          </h1>

          <p className="text-muted-foreground text-xs sm:text-sm tracking-[0.2em] uppercase font-display text-center">
            Trump's deadline for Iran to reopen the Strait of Hormuz
          </p>
          <p className="text-primary/60 text-[11px] sm:text-xs tracking-wider font-display mt-2 text-center">
            Tuesday, April 7 — 8:00 PM Eastern Time
          </p>
        </header>

        {/* Red line */}
        <div className="w-full max-w-4xl px-4">
          <RedLine />
        </div>

        {/* Countdown */}
        <main className="py-4 sm:py-8">
          <CountdownTimer />
        </main>

        {/* Red line */}
        <div className="w-full max-w-4xl px-4">
          <RedLine />
        </div>

        {/* Meta info */}
        <LastUpdated />

        {/* News feed */}
        <NewsFeed />
        <DeadlineHistory />

        {/* Footer */}
        <footer className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 mt-8">
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              Red Line Timer © {new Date().getFullYear()}
            </span>
            <span className="text-[10px] text-muted-foreground/50">
              Data sourced from public news feeds
            </span>
            <Link to="/contact" className="text-[10px] text-muted-foreground/50 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
