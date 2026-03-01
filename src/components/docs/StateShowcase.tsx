import { cn } from "@/lib/utils";

interface ShowcaseItem {
  label: string;
  element: React.ReactNode;
}

interface StateShowcaseProps {
  items: ShowcaseItem[];
  columns?: 2 | 3 | 4 | 5;
  className?: string;
}

export function StateShowcase({ items, columns = 3, className }: StateShowcaseProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
  }[columns];

  return (
    <div className={cn(`grid ${gridCols} gap-3`, className)}>
      {items.map(({ label, element }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-muted/20"
        >
          <div className="flex items-center justify-center min-h-9">{element}</div>
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{label}</span>
        </div>
      ))}
    </div>
  );
}
