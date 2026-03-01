import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  breadcrumb?: string;
}

export function Header({ theme, onToggleTheme, sidebarOpen, onToggleSidebar, breadcrumb }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 h-14 border-b border-border bg-background/80 backdrop-blur-md flex items-center px-4 gap-4">
      <button
        onClick={onToggleSidebar}
        className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <div className="flex items-center gap-2 flex-1">
        <span className="font-bold text-primary tracking-tight">Antigravity</span>
        <span className="text-muted-foreground/40">/</span>
        <span className="font-mono text-sm text-muted-foreground">Design System</span>
        {breadcrumb && (
          <>
            <span className="text-muted-foreground/40">/</span>
            <span className="font-mono text-sm text-foreground">{breadcrumb}</span>
          </>
        )}
      </div>

      <div className="flex items-center gap-2">
        <span className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded px-2 py-1">
          <kbd className="font-mono">v0.1.0</kbd>
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          className="h-8 w-8"
        >
          {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
        </Button>
      </div>
    </header>
  );
}
