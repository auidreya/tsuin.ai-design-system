import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  label: string;
}

interface RightNavProps {
  sections: Section[];
}

export function RightNav({ sections }: RightNavProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <aside className="hidden xl:block w-52 shrink-0">
      <div className="sticky top-14 pt-6 pl-4">
        <p className="font-mono text-[10px] uppercase font-bold opacity-40 mb-3 tracking-widest">
          On this page
        </p>
        <ul className="space-y-1">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "block text-xs py-1 transition-colors border-l-2 pl-3",
                  activeId === id
                    ? "text-primary border-primary font-medium"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground"
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
