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
  active: "bg-primary",
  passed: "bg-muted-foreground/40",
  extended: "bg-accent",
};

export default function DeadlineHistory() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 mt-12">
      <h2 className="font-display text-sm sm:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6 sm:mb-8">
        Deadline History
      </h2>
      <div className="relative border-l-2 border-border ml-3 pl-6 flex flex-col gap-6">
        {HISTORY.map((entry, i) => (
          <div key={i} className="relative">
            <div className={`absolute -left-[31px] top-1 w-3 h-3 rounded-full ${statusColors[entry.status]} ring-2 ring-background`} />
            <div className="flex items-baseline gap-3">
              <span className="font-display text-xs tracking-wider text-primary/70 shrink-0">{entry.date}</span>
              <span className="text-sm text-foreground">{entry.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
