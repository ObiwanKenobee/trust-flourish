export function SectionHeader({
  eyebrow,
  title,
  action,
  variant = "serif",
}: {
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
  variant?: "serif" | "mono";
}) {
  if (variant === "mono") {
    return (
      <div className="flex items-center gap-4">
        <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-ink/40">
          {title}
        </h2>
        <div className="h-px flex-1 bg-ink/10" />
        {action}
      </div>
    );
  }

  return (
    <div className="flex items-end justify-between border-b border-ink/10 pb-4">
      <div>
        {eyebrow && (
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
            {eyebrow}
          </div>
        )}
        <h2 className="font-serif text-2xl italic text-ink">{title}</h2>
      </div>
      {action}
    </div>
  );
}
