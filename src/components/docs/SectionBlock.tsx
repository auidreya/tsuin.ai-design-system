import { cn } from "@/lib/utils";

interface SectionBlockProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionBlock({ id, title, children, className }: SectionBlockProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 space-y-4", className)}>
      <h2 className="text-xl font-semibold tracking-tight border-b border-border pb-2">{title}</h2>
      {children}
    </section>
  );
}
