import { useCountdown } from "@/hooks/useCountdown";

function TimerDigit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      <div className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-primary text-glow-intense tabular-nums" style={{ animation: "tick 1s ease-in-out infinite" }}>
        {display}
      </div>
      <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground font-display">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary text-glow animate-pulse-glow self-start mt-1 sm:mt-2">
      :
    </span>
  );
}

export default function CountdownTimer() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown();

  if (isExpired) {
    return (
      <div className="flex flex-col items-center gap-6">
        <div className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-primary text-glow-intense animate-pulse-glow">
          DEADLINE REACHED
        </div>
        <p className="text-muted-foreground text-sm sm:text-base tracking-widest uppercase font-display">
          Awaiting next announcement
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6">
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
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
