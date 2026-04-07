import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "@/components/CountdownTimer";
import RedLine from "@/components/RedLine";
import NewsFeed from "@/components/NewsFeed";
import DeadlineHistory from "@/components/DeadlineHistory";
import ShareButtons from "@/components/ShareButtons";
import { Radio, Mail } from "lucide-react";

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
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />

      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Top nav */}
        <nav className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-[10px] font-display uppercase tracking-[0.4em] text-primary/70">
              Live
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/about"
              className="px-4 py-2 rounded-lg text-xs font-display uppercase tracking-[0.2em] text-foreground/80 hover:text-primary border border-border/60 hover:border-primary/40 transition-all duration-300 hover:box-glow-subtle"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-display uppercase tracking-[0.2em] text-foreground/80 hover:text-primary border border-border/60 hover:border-primary/40 transition-all duration-300 hover:box-glow-subtle"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <header className="flex flex-col items-center pt-12 sm:pt-20 md:pt-28 px-4">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.15em] text-foreground text-glow mb-3 sm:mb-4 text-center">
            RED LINE <span className="text-primary">TIMER</span>
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase font-display text-center max-w-lg">
            Trump's deadline for Iran to reopen the Strait of Hormuz
          </p>
          <p className="text-primary/60 text-xs sm:text-sm tracking-wider font-display mt-2 text-center">
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
          <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground/60 uppercase">
              Red Line Timer © {new Date().getFullYear()}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-muted-foreground/40">
                Data sourced from public news feeds
              </span>
              <Link to="/about" className="text-[10px] text-muted-foreground/40 hover:text-primary transition-colors">About</Link>
              <Link to="/privacy" className="text-[10px] text-muted-foreground/40 hover:text-primary transition-colors">Privacy</Link>
              <Link to="/contact" className="text-[10px] text-muted-foreground/40 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
