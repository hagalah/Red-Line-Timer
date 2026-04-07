import { useCountdown } from "@/hooks/useCountdown";
import { cn } from "@/lib/utils";

function TimerDigit({ value, label, intense }: { value: number; label: string; intense?: boolean }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className={cn("glass-card px-3 py-2 sm:px-5 sm:py-4 md:px-6 md:py-5 transition-all duration-500", intense && "border-primary/60 box-glow")}>
        <div
          className={cn(
            "font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-primary text-glow-intense tabular-nums transition-all duration-500",
            intense && "text-glow-intense"
          )}
          style={{ animation: "tick 1s ease-in-out infinite" }}
        >
          {display}
        </div>
      </div>
      <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground font-display">
        {label}
      </span>
    </div>
  );
}

function Separator({ intense }: { intense?: boolean }) {
  return (
    <span className={cn("font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary/40 self-start mt-3 sm:mt-5 md:mt-6 transition-colors duration-500", intense && "text-primary/80")}>
      :
    </span>
  );
}

function UrgencyMessage({ totalSeconds }: { totalSeconds: number }) {
  if (totalSeconds > 600) return null;

  let message = "";
  let className = "text-muted-foreground";

  if (totalSeconds <= 10) {
    message = `${totalSeconds}…`;
    className = "text-primary text-glow-intense text-3xl sm:text-5xl md:text-6xl font-black animate-pulse";
  } else if (totalSeconds <= 60) {
    message = "Less than 60 seconds remaining";
    className = "text-primary text-glow-intense animate-pulse";
  } else if (totalSeconds <= 120) {
    message = "Final moments approaching";
    className = "text-primary/90 text-glow";
  } else if (totalSeconds <= 300) {
    message = "Stay on this page — updates happen in real time";
    className = "text-primary/70";
  } else {
    message = "Stay on this page — updates happen in real time";
    className = "text-muted-foreground";
  }

  return (
    <p className={cn("font-display text-xs sm:text-sm tracking-wider uppercase mt-4 sm:mt-6 text-center transition-all duration-500", className)}>
      {message}
    </p>
  );
}

function HeadlineOverride({ totalSeconds }: { totalSeconds: number }) {
  if (totalSeconds > 600) return null;

  return (
    <div className={cn(
      "font-display text-sm sm:text-lg md:text-xl uppercase tracking-[0.3em] mb-4 sm:mb-6 text-center transition-all duration-500",
      totalSeconds <= 120 ? "text-primary text-glow-intense animate-pulse" :
      totalSeconds <= 300 ? "text-primary text-glow" :
      "text-primary/80"
    )}>
      ⚠ FINAL {totalSeconds <= 60 ? "SECONDS" : totalSeconds <= 120 ? "2 MINUTES" : totalSeconds <= 300 ? "5 MINUTES" : "10 MINUTES"}
    </div>
  );
}

export default function CountdownTimer() {
  const { days, hours, minutes, seconds, totalSeconds, isExpired } = useCountdown();

  const intense = totalSeconds <= 300;
  const superIntense = totalSeconds <= 120;

  if (isExpired) {
    return (
      <div className="flex flex-col items-center gap-6">
        <div className="glass-card px-8 py-6 border-primary/60 box-glow-intense">
          <div className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-primary text-glow-intense animate-pulse-glow">
            DEADLINE REACHED
          </div>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base tracking-widest uppercase font-display">
          Awaiting next official update…
        </p>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center gap-4 sm:gap-6 transition-all duration-500", superIntense && "scale-105")}>
      <HeadlineOverride totalSeconds={totalSeconds} />
      <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4">
        {days > 0 && (
          <>
            <TimerDigit value={days} label="Days" intense={intense} />
            <Separator intense={intense} />
          </>
        )}
        <TimerDigit value={hours} label="Hours" intense={intense} />
        <Separator intense={intense} />
        <TimerDigit value={minutes} label="Min" intense={intense} />
        <Separator intense={intense} />
        <TimerDigit value={seconds} label="Sec" intense={intense} />
      </div>
      <UrgencyMessage totalSeconds={totalSeconds} />
    </div>
  );
}
