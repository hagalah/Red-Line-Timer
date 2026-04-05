export default function RedLine() {
  return (
    <div className="w-full relative h-[2px] my-8 sm:my-12 overflow-hidden">
      {/* Base line */}
      <div className="absolute inset-0 bg-primary/30" />
      {/* Glow */}
      <div className="absolute inset-0 bg-primary animate-pulse-glow box-glow" />
      {/* Scan effect */}
      <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
    </div>
  );
}
