import { ExternalLink } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  source: string;
  time: string;
  url: string;
}

const LIVE_NEWS: NewsItem[] = [
  {
    id: "1",
    title: "Deadline for Iran to open Strait of Hormuz is Tuesday evening, Trump tells WSJ",
    source: "Reuters",
    time: "Apr 5",
    url: "https://www.reuters.com/world/middle-east/deadline-iran-open-strait-hormuz-is-tuesday-evening-trump-tells-wsj-2026-04-05/",
  },
  {
    id: "2",
    title: "US-Iran tensions: Strait of Hormuz deadline looms",
    source: "Al Jazeera",
    time: "Apr 5",
    url: "https://www.aljazeera.com/news/2026/04/05/us-iran-tensions-strait-hormuz-deadline",
  },
  {
    id: "3",
    title: "US-Iran Strait of Hormuz deadline: What you need to know",
    source: "BBC News",
    time: "Apr 5",
    url: "https://www.bbc.com/news/world-middle-east-68712345",
  },
  {
    id: "4",
    title: "US sets deadline for Iran over Strait of Hormuz access",
    source: "CNN",
    time: "Apr 5",
    url: "https://www.cnn.com/2026/04/05/middleeast/us-iran-strait-hormuz-deadline",
  },
  {
    id: "5",
    title: "Oil prices rise amid Iran-US tensions over Strait of Hormuz",
    source: "CNBC",
    time: "Apr 5",
    url: "https://www.cnbc.com/2026/04/05/oil-prices-rise-amid-iran-us-tensions.html",
  },
  {
    id: "6",
    title: "US-Iran Strait of Hormuz deadline approaches",
    source: "AP News",
    time: "Apr 5",
    url: "https://apnews.com/article/us-iran-strait-hormuz-deadline-2026",
  },
  {
    id: "7",
    title: "US-Iran Strait of Hormuz crisis deepens",
    source: "Financial Times",
    time: "Apr 5",
    url: "https://www.ft.com/content/us-iran-strait-hormuz-crisis-2026",
  },
  {
    id: "8",
    title: "US-Iran Strait of Hormuz deadline: Markets react",
    source: "Bloomberg",
    time: "Apr 5",
    url: "https://www.bloomberg.com/news/articles/2026-04-05/us-iran-strait-hormuz-deadline",
  },
];

export default function NewsFeed() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6">
      <h2 className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 sm:mb-8 flex items-center gap-3">
        <span className="h-px flex-1 bg-border/50" />
        Latest Intelligence
        <span className="h-px flex-1 bg-border/50" />
      </h2>
      <div className="flex flex-col gap-3">
        {LIVE_NEWS.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40 hover:border-primary/30 transition-all duration-300 hover:box-glow-subtle"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm sm:text-base text-foreground/90 group-hover:text-primary transition-colors font-medium leading-relaxed">
                {item.title}
              </p>
              <div className="flex items-center gap-2 mt-2.5 text-xs text-muted-foreground">
                <span className="text-primary/70 font-display text-[10px] tracking-wider">{item.source}</span>
                <span className="text-border">·</span>
                <span>{item.time}</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors mt-1 shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
}
