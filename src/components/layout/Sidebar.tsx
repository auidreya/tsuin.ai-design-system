import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Info, Activity, Square, TextCursor, CreditCard, Tag, AlertTriangle,
  MessageSquare, List, ToggleLeft, CheckSquare, UserCircle, HelpCircle,
  Search, Zap, Settings2,
} from "lucide-react";

const navSections = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", path: "/", icon: <Info size={14} /> },
      { label: "Design Tokens", path: "/tokens", icon: <Activity size={14} /> },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Button", path: "/components/button", icon: <Square size={14} /> },
      { label: "Input", path: "/components/input", icon: <TextCursor size={14} /> },
      { label: "Card", path: "/components/card", icon: <CreditCard size={14} /> },
      { label: "Badge", path: "/components/badge", icon: <Tag size={14} /> },
      { label: "Alert", path: "/components/alert", icon: <AlertTriangle size={14} /> },
      { label: "Dialog", path: "/components/dialog", icon: <MessageSquare size={14} /> },
      { label: "Select", path: "/components/select", icon: <List size={14} /> },
      { label: "Tabs", path: "/components/tabs", icon: <Settings2 size={14} /> },
      { label: "Switch", path: "/components/switch", icon: <ToggleLeft size={14} /> },
      { label: "Checkbox", path: "/components/checkbox", icon: <CheckSquare size={14} /> },
      { label: "Avatar", path: "/components/avatar", icon: <UserCircle size={14} /> },
      { label: "Tooltip", path: "/components/tooltip", icon: <HelpCircle size={14} /> },
    ],
  },
  {
    title: "Advanced",
    items: [
      { label: "Agentic States", path: "/advanced/agentic", icon: <Zap size={14} /> },
    ],
  },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const [query, setQuery] = useState("");
  const location = useLocation();

  const filteredSections = navSections.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0);

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed top-14 left-0 z-30 h-[calc(100vh-56px)] w-72 border-r border-border bg-background/95 backdrop-blur-sm transition-transform duration-200 overflow-y-auto",
          "lg:translate-x-0 lg:static lg:h-full",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-8 h-8 text-xs bg-muted/50 border-border/60"
            />
          </div>

          {/* Nav sections */}
          {filteredSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-mono text-[10px] uppercase font-bold opacity-40 mb-3 tracking-widest px-3">
                {section.title}
              </h3>
              <ul className="space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      onClick={() => { if (window.innerWidth < 1024) onClose(); }}
                      className={({ isActive }) =>
                        cn(
                          "group flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all border",
                          isActive
                            ? "bg-primary/10 text-primary font-semibold border-primary/15 shadow-sm"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/60"
                        )
                      }
                    >
                      <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                      {item.label}
                      {location.pathname === item.path && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
