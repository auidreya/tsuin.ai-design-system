import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DocsLayout } from "@/components/layout/DocsLayout";
import { GettingStarted } from "@/pages/GettingStarted";
import { ButtonDocs } from "@/pages/components/ButtonDocs";
import { InputDocs } from "@/pages/components/InputDocs";
import { CardDocs } from "@/pages/components/CardDocs";
import { BadgeDocs } from "@/pages/components/BadgeDocs";
import { AlertDocs } from "@/pages/components/AlertDocs";
import { DialogDocs } from "@/pages/components/DialogDocs";
import { SelectDocs } from "@/pages/components/SelectDocs";
import { TabsDocs } from "@/pages/components/TabsDocs";
import { SwitchDocs } from "@/pages/components/SwitchDocs";
import { CheckboxDocs } from "@/pages/components/CheckboxDocs";
import { AvatarDocs } from "@/pages/components/AvatarDocs";
import { TooltipDocs } from "@/pages/components/TooltipDocs";
import { MascotDocs } from "@/pages/MascotDocs";
import { BrandFoundation } from "@/pages/brand/BrandFoundation";
import { BrandLogo } from "@/pages/brand/BrandLogo";
import { BrandTypography } from "@/pages/brand/BrandTypography";
import { BrandColor } from "@/pages/brand/BrandColor";
import { BrandVoice } from "@/pages/brand/BrandVoice";

type Theme = "light" | "dark";

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <BrowserRouter>
      <TooltipProvider>
        <Routes>
          <Route element={<DocsLayout theme={theme} onToggleTheme={toggleTheme} />}>
            <Route path="/" element={<GettingStarted />} />
            <Route path="/components/button" element={<ButtonDocs />} />
            <Route path="/components/input" element={<InputDocs />} />
            <Route path="/components/card" element={<CardDocs />} />
            <Route path="/components/badge" element={<BadgeDocs />} />
            <Route path="/components/alert" element={<AlertDocs />} />
            <Route path="/components/dialog" element={<DialogDocs />} />
            <Route path="/components/select" element={<SelectDocs />} />
            <Route path="/components/tabs" element={<TabsDocs />} />
            <Route path="/components/switch" element={<SwitchDocs />} />
            <Route path="/components/checkbox" element={<CheckboxDocs />} />
            <Route path="/components/avatar" element={<AvatarDocs />} />
            <Route path="/components/tooltip" element={<TooltipDocs />} />
            <Route path="/assets/mascot" element={<MascotDocs />} />
            <Route path="/brand/foundation" element={<BrandFoundation />} />
            <Route path="/brand/logo" element={<BrandLogo />} />
            <Route path="/brand/typography" element={<BrandTypography />} />
            <Route path="/brand/color" element={<BrandColor />} />
            <Route path="/brand/voice" element={<BrandVoice />} />
          </Route>
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  );
}
