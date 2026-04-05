import { ExternalLink } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  source: string;
  time: string;
  url: string;
}

const MOCK_NEWS: NewsItem[] = [
  { id: "1", title: "US tightens sanctions on Iranian oil exports amid Strait of Hormuz tensions", source: "Reuters", time: "2h ago", url: "#" },
  { id: "2", title: "Trump issues 72-hour ultimatum over Hormuz shipping lane disputes", source: "AP News", time: "4h ago", url: "#" },
  { id: "3", title: "Iran responds to latest diplomatic deadline with military exercises", source: "BBC", time: "6h ago", url: "#" },
  { id: "4", title: "Oil prices surge as Strait of Hormuz tensions escalate", source: "Bloomberg", time: "8h ago", url: "#" },
  { id: "5", title: "Pentagon moves carrier group closer to Persian Gulf region", source: "CNN", time: "12h ago", url: "#" },
];

export default function NewsFeed() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6">
      <h2 className="font-display text-sm sm:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6 sm:mb-8">
        Latest Intelligence
      </h2>
      <div className="flex flex-col gap-3">
        {MOCK_NEWS.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className="group flex items-start justify-between gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:box-glow"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm sm:text-base text-foreground group-hover:text-primary transition-colors font-medium leading-snug">
                {item.title}
              </p>
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <span className="text-primary/70 font-display text-[10px] tracking-wider">{item.source}</span>
                <span>·</span>
                <span>{item.time}</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
}
