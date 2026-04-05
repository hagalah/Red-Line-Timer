import { Share2 } from "lucide-react";

const SHARE_TEXT = "The clock is ticking ⏳ #RedLineTimer";
const SHARE_URL = typeof window !== "undefined" ? window.location.href : "";

const channels = [
  {
    name: "X",
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_URL)}`,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + " " + SHARE_URL)}`,
  },
  {
    name: "Telegram",
    href: `https://t.me/share/url?url=${encodeURIComponent(SHARE_URL)}&text=${encodeURIComponent(SHARE_TEXT)}`,
  },
];

export default function ShareButtons() {
  return (
    <div className="flex items-center gap-3">
      <Share2 className="w-4 h-4 text-muted-foreground" />
      {channels.map((ch) => (
        <a
          key={ch.name}
          href={ch.href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-md border border-border text-xs font-display uppercase tracking-wider text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:box-glow"
        >
          {ch.name}
        </a>
      ))}
    </div>
  );
}
