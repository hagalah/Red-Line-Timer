interface DeadlineEntry {
  date: string;
  description: string;
  status: "active" | "passed" | "extended";
}

const HISTORY: DeadlineEntry[] = [
  { date: "Apr 5", description: "Tuesday 8:00 PM ET — final deadline issued", status: "active" },
  { date: "Apr 4", description: "48-hour ultimatum warning", status: "passed" },
  { date: "Mar 26", description: "10-day deadline announced", status: "extended" },
];

const statusColors: Record<DeadlineEntry["status"], string> = {
  active: "bg-primary box-glow-subtle",
  passed: "bg-muted-foreground/40",
  extended: "bg-accent/60",
};

export default function DeadlineHistory() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 mt-12">
      <h2 className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 sm:mb-8 flex items-center gap-3">
        <span className="h-px flex-1 bg-border/50" />
        Deadline History
        <span className="h-px flex-1 bg-border/50" />
      </h2>
      <div className="relative border-l border-border/40 ml-3 pl-6 flex flex-col gap-6">
        {HISTORY.map((entry, i) => (
          <div key={i} className="relative group">
            <div className={`absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full ${statusColors[entry.status]} ring-2 ring-background transition-all`} />
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <span className="font-display text-[11px] tracking-wider text-primary/70 shrink-0">{entry.date}</span>
              <span className="text-sm text-foreground/80">{entry.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
