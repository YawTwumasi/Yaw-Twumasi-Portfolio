export function FloatingBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary/5 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-24 h-[24rem] w-[24rem] rounded-full bg-accent/5 blur-3xl animate-blob [animation-delay:-4s]" />
      <div className="absolute -bottom-32 left-1/3 h-[22rem] w-[22rem] rounded-full bg-primary/4 blur-3xl animate-blob [animation-delay:-8s]" />
    </div>
  );
}
