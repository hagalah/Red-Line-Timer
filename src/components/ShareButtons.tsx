import { Share2 } from "lucide-react";

const SHARE_TEXT = "The clock is ticking ⏳ #RedLineTimer";

export default function ShareButtons() {
  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Red Line Timer", text: SHARE_TEXT, url: shareUrl });
      } catch {}
    } else {
      await navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="px-3 py-1.5 rounded-md border border-border text-xs font-display uppercase tracking-wider text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 flex items-center gap-1.5"
    >
      <Share2 className="w-3 h-3" />
      Share
    </button>
  );
}
