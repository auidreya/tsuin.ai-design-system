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
  "/assets/mascot": { breadcrumb: "Mascot", sections: [{ id: "overview", label: "Overview" }, { id: "assets", label: "Assets" }, { id: "usage", label: "Usage" }] },
  "/brand/foundation": { breadcrumb: "Foundation", sections: [{ id: "overview", label: "Overview" }, { id: "mission", label: "Mission" }, { id: "audience", label: "Audience" }, { id: "emotional-territory", label: "Emotional Territory" }, { id: "avoid", label: "What to Avoid" }, { id: "competitive", label: "Competitive" }, { id: "principles", label: "Principles" }, { id: "anchor", label: "Anchor" }] },
  "/brand/logo": { breadcrumb: "Logo System", sections: [{ id: "overview", label: "Overview" }, { id: "metaphor", label: "Visual Metaphor" }, { id: "variants", label: "Variants" }, { id: "clearspace", label: "Clear Space" }, { id: "microicon", label: "Micro Icon" }, { id: "contexts", label: "Contexts" }, { id: "motion", label: "Motion" }, { id: "usage", label: "Usage Rules" }] },
  "/brand/typography": { breadcrumb: "Typography", sections: [{ id: "overview", label: "Overview" }, { id: "system", label: "Type System" }, { id: "scale", label: "Type Scale" }, { id: "pairing", label: "Pairing" }, { id: "rules", label: "Rules" }] },
  "/brand/color": { breadcrumb: "Color", sections: [{ id: "overview", label: "Overview" }, { id: "philosophy", label: "Philosophy" }, { id: "light-palette", label: "Light Palette" }, { id: "dark-palette", label: "Dark Palette" }, { id: "accent", label: "Accent Usage" }, { id: "combinations", label: "Combinations" }, { id: "avoid", label: "What to Avoid" }] },
  "/brand/voice": { breadcrumb: "Voice & Tone", sections: [{ id: "overview", label: "Overview" }, { id: "principles", label: "Voice Principles" }, { id: "tone", label: "Tone by Context" }, { id: "wordlist", label: "Word List" }, { id: "anchor", label: "The Test" }] },
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
