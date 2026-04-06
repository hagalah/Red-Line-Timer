import { useCountdown } from "@/hooks/useCountdown";

function TimerDigit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="glass-card px-3 py-2 sm:px-5 sm:py-4 md:px-6 md:py-5">
        <div
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-primary text-glow-intense tabular-nums"
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

function Separator() {
  return (
    <span className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary/40 self-start mt-3 sm:mt-5 md:mt-6">
      :
    </span>
  );
}

export default function CountdownTimer() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown();

  if (isExpired) {
    return (
      <div className="flex flex-col items-center gap-6">
        <div className="glass-card px-8 py-6">
          <div className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-primary text-glow-intense animate-pulse-glow">
            DEADLINE REACHED
          </div>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base tracking-widest uppercase font-display">
          Awaiting next announcement
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6">
      <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4">
        {days > 0 && (
          <>
            <TimerDigit value={days} label="Days" />
            <Separator />
          </>
        )}
        <TimerDigit value={hours} label="Hours" />
        <Separator />
        <TimerDigit value={minutes} label="Min" />
        <Separator />
        <TimerDigit value={seconds} label="Sec" />
      </div>
    </div>
  );
}
