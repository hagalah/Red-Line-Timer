import { Share2 } from "lucide-react";

const SHARE_TEXT = "The clock is ticking ⏳ #RedLineTimer";

export default function ShareButtons() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="flex items-center gap-3">
      <Share2 className="w-4 h-4 text-muted-foreground" />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-md border border-border text-xs font-display uppercase tracking-wider text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:box-glow"
      >
        X
      </a>
    </div>
  );
}
