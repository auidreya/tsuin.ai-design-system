import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { RightNav } from "./RightNav";

const pathLabels: Record<string, { breadcrumb: string; sections: { id: string; label: string }[] }> = {
  "/": { breadcrumb: "Introduction", sections: [{ id: "overview", label: "Overview" }, { id: "installation", label: "Installation" }, { id: "theming", label: "Theming" }] },
  "/tokens": { breadcrumb: "Design Tokens", sections: [] },
  "/components/button": { breadcrumb: "Button", sections: [{ id: "overview", label: "Overview" }, { id: "variants", label: "Variants" }, { id: "props", label: "Props" }, { id: "accessibility", label: "Accessibility" }] },
  "/components/input": { breadcrumb: "Input", sections: [{ id: "overview", label: "Overview" }, { id: "variants", label: "Variants" }, { id: "props", label: "Props" }, { id: "accessibility", label: "Accessibility" }] },
  "/components/card": { breadcrumb: "Card", sections: [{ id: "overview", label: "Overview" }, { id: "variants", label: "Variants" }, { id: "props", label: "Props" }] },
  "/components/badge": { breadcrumb: "Badge", sections: [{ id: "overview", label: "Overview" }, { id: "variants", label: "Variants" }, { id: "props", label: "Props" }] },
  "/components/alert": { breadcrumb: "Alert", sections: [{ id: "overview", label: "Overview" }, { id: "variants", label: "Variants" }, { id: "props", label: "Props" }, { id: "accessibility", label: "Accessibility" }] },
  "/components/dialog": { breadcrumb: "Dialog", sections: [{ id: "overview", label: "Overview" }, { id: "variants", label: "Variants" }, { id: "props", label: "Props" }, { id: "accessibility", label: "Accessibility" }] },
  "/components/select": { breadcrumb: "Select", sections: [{ id: "overview", label: "Overview" }, { id: "variants", label: "Variants" }, { id: "props", label: "Props" }, { id: "accessibility", label: "Accessibility" }] },
  "/components/tabs": { breadcrumb: "Tabs", sections: [{ id: "overview", label: "Overview" }, { id: "variants", label: "Variants" }, { id: "props", label: "Props" }, { id: "accessibility", label: "Accessibility" }] },
  "/components/switch": { breadcrumb: "Switch", sections: [{ id: "overview", label: "Overview" }, { id: "variants", label: "Variants" }, { id: "props", label: "Props" }, { id: "accessibility", label: "Accessibility" }] },
  "/components/checkbox": { breadcrumb: "Checkbox", sections: [{ id: "overview", label: "Overview" }, { id: "variants", label: "Variants" }, { id: "props", label: "Props" }, { id: "accessibility", label: "Accessibility" }] },
  "/components/avatar": { breadcrumb: "Avatar", sections: [{ id: "overview", label: "Overview" }, { id: "variants", label: "Variants" }, { id: "props", label: "Props" }] },
  "/components/tooltip": { breadcrumb: "Tooltip", sections: [{ id: "overview", label: "Overview" }, { id: "variants", label: "Variants" }, { id: "props", label: "Props" }, { id: "accessibility", label: "Accessibility" }] },
};

interface DocsLayoutProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function DocsLayout({ theme, onToggleTheme }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const meta = pathLabels[location.pathname] ?? { breadcrumb: undefined, sections: [] };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        theme={theme}
        onToggleTheme={onToggleTheme}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
        breadcrumb={meta.breadcrumb}
      />
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 min-w-0 flex">
          <div className="flex-1 overflow-y-auto px-6 py-8 max-w-4xl mx-auto w-full">
            <Outlet />
          </div>
          <RightNav sections={meta.sections} />
        </main>
      </div>
    </div>
  );
}
