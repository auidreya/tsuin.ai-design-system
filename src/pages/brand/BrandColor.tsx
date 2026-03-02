import { useState } from "react";
import { SectionBlock } from "@/components/docs/SectionBlock";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";

// ─── Copy value chip ──────────────────────────────────────────────────────────

function CopyChip({ value, className }: { value: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      title={`Copy ${value}`}
      className={cn(
        "group flex items-center gap-1 font-mono text-[10px] transition-colors cursor-pointer",
        copied ? "text-primary" : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {copied ? <Check size={9} /> : <Copy size={9} className="opacity-0 group-hover:opacity-60 transition-opacity" />}
      <span>{copied ? "Copied!" : value}</span>
    </button>
  );
}

// ─── Swatch ───────────────────────────────────────────────────────────────────

interface SwatchProps {
  name: string;
  hsl: string;
  hex: string;
  token: string;
  description: string;
}

function Swatch({ name, hsl, hex, token, description }: SwatchProps) {
  return (
    <div className="rounded-lg border border-border overflow-hidden bg-card">
      <div className="h-16 w-full" style={{ backgroundColor: hsl }} />
      <div className="p-3 space-y-1.5">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <CopyChip value={token} className="text-primary" />
        <CopyChip value={hex} />
        <CopyChip value={hsl} />
        <p className="text-[11px] text-muted-foreground leading-snug pt-0.5">{description}</p>
      </div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const LIGHT_PALETTE: SwatchProps[] = [
  { name: "Background", hsl: "hsl(44, 87%, 94%)", hex: "#FDF6E3", token: "--background", description: "Warm cream base. The canvas. Inspired by Solarized Base3." },
  { name: "Foreground", hsl: "hsl(192, 10%, 20%)", hex: "#2B3539", token: "--foreground", description: "Dark teal-grey. All primary body text." },
  { name: "Primary — Teal", hsl: "hsl(175, 59%, 40%)", hex: "#2AA198", token: "--primary", description: "The CTA colour. Buttons, links, active states. Use sparingly." },
  { name: "Secondary", hsl: "hsl(45, 47%, 89%)", hex: "#EEE8D5", token: "--secondary", description: "Subtle surface. Cards, sidebars, secondary buttons." },
  { name: "Muted", hsl: "hsl(45, 30%, 88%)", hex: "#E8E0CC", token: "--muted", description: "Lowest-contrast surface. Hover states, disabled backgrounds." },
  { name: "Border", hsl: "hsl(45, 20%, 80%)", hex: "#CEC8B5", token: "--border", description: "All UI borders. Separators, input outlines, card edges." },
];

const DARK_PALETTE: SwatchProps[] = [
  { name: "Background", hsl: "hsl(235, 24%, 13%)", hex: "#1A1B26", token: "--background", description: "Deep navy. The canvas. Tokyo Night Storm base." },
  { name: "Foreground", hsl: "hsl(228, 35%, 85%)", hex: "#C0CAF5", token: "--foreground", description: "Cool lavender-white. All primary body text." },
  { name: "Primary — Blue", hsl: "hsl(221, 92%, 72%)", hex: "#7AA2F7", token: "--primary", description: "The CTA colour in dark mode. Buttons, links, active states." },
  { name: "Accent — Purple", hsl: "hsl(261, 88%, 79%)", hex: "#BB9AF7", token: "--accent", description: "Decorative accent only. Highlights, tags, illustration accents." },
  { name: "Muted", hsl: "hsl(231, 25%, 22%)", hex: "#252737", token: "--muted", description: "Hover states, disabled backgrounds, secondary surfaces." },
  { name: "Border", hsl: "hsl(231, 15%, 30%)", hex: "#414868", token: "--border", description: "All UI borders. Separators, input outlines, card edges." },
];

const APPROVED_COMBOS = [
  {
    label: "Body text — Light mode",
    fg: "hsl(192, 10%, 20%)", fgHex: "#2B3539", fgName: "Foreground",
    bg: "hsl(44, 87%, 94%)", bgHex: "#FDF6E3", bgName: "Background",
    mode: "Light",
  },
  {
    label: "Body text — Dark mode",
    fg: "hsl(228, 35%, 85%)", fgHex: "#C0CAF5", fgName: "Foreground",
    bg: "hsl(235, 24%, 13%)", bgHex: "#1A1B26", bgName: "Background",
    mode: "Dark",
  },
  {
    label: "CTA button — Light mode",
    fg: "hsl(44, 87%, 94%)", fgHex: "#FDF6E3", fgName: "Primary Foreground",
    bg: "hsl(175, 59%, 40%)", bgHex: "#2AA198", bgName: "Primary Teal",
    mode: "Light",
  },
  {
    label: "CTA button — Dark mode",
    fg: "hsl(235, 24%, 13%)", fgHex: "#1A1B26", fgName: "Primary Foreground",
    bg: "hsl(221, 92%, 72%)", bgHex: "#7AA2F7", bgName: "Primary Blue",
    mode: "Dark",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export function BrandColor() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div id="overview" className="scroll-mt-20 space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Color</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Tsuin.ai uses a dual-mode palette with a single accent colour per mode. Color is not
          decoration — it is signal. Every colour in the system has a job. Nothing is added for
          aesthetics alone.
        </p>
      </div>

      {/* Philosophy */}
      <SectionBlock id="philosophy" title="Dual-Mode Philosophy">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="rounded-xl border border-border p-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 rounded-full" style={{ backgroundColor: "#FDF6E3", border: "1px solid #CEC8B5" }} />
              <p className="font-semibold text-sm text-foreground">Solarized Light — Teal</p>
            </div>
            <p className="text-[12px] text-muted-foreground leading-relaxed">
              Warm off-white base with muted amber-cream accents. The Teal primary signals
              precision and craft without the cold distance of blue. Chosen for readability in
              well-lit environments.
            </p>
            <p className="text-[12px] text-muted-foreground">
              <span className="font-medium text-foreground">Accent:</span> Teal —{" "}
              <CopyChip value="#2AA198" className="inline-flex text-primary" />
            </p>
          </div>
          <div className="rounded-xl border p-5 space-y-3" style={{ backgroundColor: "#1A1B26", borderColor: "#414868" }}>
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 rounded-full" style={{ backgroundColor: "#1A1B26", border: "1px solid #414868" }} />
              <p className="font-semibold text-sm" style={{ color: "#C0CAF5" }}>Tokyo Night Storm — Blue</p>
            </div>
            <p className="text-[12px] leading-relaxed" style={{ color: "#636d9e" }}>
              Deep navy base with cool blue accents and a purple decorative colour. The blue
              primary is high contrast. Purple is strictly decorative — never for CTAs.
            </p>
            <div className="flex flex-wrap gap-3 text-[12px]" style={{ color: "#636d9e" }}>
              <span style={{ color: "#C0CAF5" }} className="font-medium">CTA:</span>
              <CopyChip value="#7AA2F7" className="text-[#7aa2f7]" />
              <span style={{ color: "#C0CAF5" }} className="font-medium">Decorative:</span>
              <CopyChip value="#BB9AF7" className="text-[#bb9af7]" />
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* Light palette */}
      <SectionBlock id="light-palette" title="Light Mode Palette">
        <p className="text-[12px] text-muted-foreground mb-4">Click any value to copy.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {LIGHT_PALETTE.map((s) => <Swatch key={s.token + s.name} {...s} />)}
        </div>
      </SectionBlock>

      {/* Dark palette */}
      <SectionBlock id="dark-palette" title="Dark Mode Palette">
        <p className="text-[12px] text-muted-foreground mb-4">Click any value to copy.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {DARK_PALETTE.map((s) => <Swatch key={s.token + s.name} {...s} />)}
        </div>
      </SectionBlock>

      {/* Accent usage */}
      <SectionBlock id="accent" title="Accent Colour Rules">
        <p className="text-sm text-muted-foreground mb-5">
          The primary accent colour (Teal in light, Blue in dark) is the only colour used for
          interactive and action-oriented elements. Everything else is neutral.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* DO column */}
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">Do</h3>

            {/* Example: CTA button */}
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="p-4 space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40">Primary CTA button</p>
                <div className="flex gap-2">
                  <div className="h-8 px-4 rounded-md bg-primary flex items-center">
                    <span className="font-mono text-xs text-primary-foreground font-medium">Get started</span>
                  </div>
                  <div className="h-8 px-4 rounded-md border border-border flex items-center">
                    <span className="font-mono text-xs text-muted-foreground">Learn more</span>
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground">One accent element per cluster. Secondary stays neutral.</p>
              </div>
            </div>

            {/* Example: Active nav */}
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="p-4 space-y-2">
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40">Active navigation state</p>
                <div className="space-y-0.5">
                  {["Foundation", "Logo System", "Typography"].map((item, i) => (
                    <div key={item} className={cn(
                      "flex items-center gap-2 px-2 py-1.5 rounded text-xs font-mono",
                      i === 1
                        ? "bg-primary/10 text-primary border border-primary/15 font-semibold"
                        : "text-muted-foreground"
                    )}>
                      {i === 1 && <span className="w-1.5 h-1.5 rounded-full bg-primary ml-auto" />}
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-muted-foreground">Accent used only on the active item.</p>
              </div>
            </div>

            {/* Example: Inline link */}
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="p-4 space-y-2">
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40">Link in body copy</p>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  Tsuin captures your thought process.{" "}
                  <span className="text-primary underline underline-offset-2 cursor-pointer">Read how it works →</span>
                </p>
                <p className="text-[10px] text-muted-foreground">Accent on interactive text only.</p>
              </div>
            </div>
          </div>

          {/* DON'T column */}
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-destructive font-bold">Don't</h3>

            {/* Don't: accent background wash */}
            <div className="rounded-lg border border-destructive/20 bg-destructive/5 overflow-hidden">
              <div className="p-4 space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-destructive/50">Accent background wash</p>
                <div className="rounded-md p-3 bg-primary/15 border border-primary/20">
                  <p className="font-mono text-xs text-foreground font-medium">Capture session active</p>
                  <p className="font-mono text-[10px] text-muted-foreground">auth-service · 2 mins ago</p>
                </div>
                <p className="text-[10px] text-destructive/70">Decorative background fill dilutes accent meaning.</p>
              </div>
            </div>

            {/* Don't: decorative accent text */}
            <div className="rounded-lg border border-destructive/20 bg-destructive/5 overflow-hidden">
              <div className="p-4 space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-destructive/50">Accent on non-interactive text</p>
                <p className="font-mono text-xs leading-relaxed">
                  <span className="text-primary">Tsuin captures your thought process</span>{" "}
                  <span className="text-muted-foreground">and makes it available to your team.</span>
                </p>
                <p className="text-[10px] text-destructive/70">Accent implies interactivity. Static text is always foreground.</p>
              </div>
            </div>

            {/* Don't: multiple accent elements */}
            <div className="rounded-lg border border-destructive/20 bg-destructive/5 overflow-hidden">
              <div className="p-4 space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-destructive/50">Multiple accent elements at once</p>
                <div className="flex items-center gap-2">
                  <div className="h-7 px-3 rounded bg-primary flex items-center">
                    <span className="font-mono text-[10px] text-primary-foreground">Start</span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">Active</span>
                  <span className="font-mono text-[10px] text-primary underline">Details →</span>
                </div>
                <p className="text-[10px] text-destructive/70">One accent element per visual cluster. Never three simultaneously.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* Combinations */}
      <SectionBlock id="combinations" title="Approved Combinations">
        <p className="text-sm text-muted-foreground mb-5">
          Only these foreground/background pairings are approved. Click any colour value to copy.
        </p>
        <div className="space-y-3">
          {APPROVED_COMBOS.map((combo) => (
            <div key={combo.label} className="rounded-lg border border-border overflow-hidden flex">
              {/* Preview swatch */}
              <div
                className="flex items-center justify-center px-6 min-w-[120px] shrink-0"
                style={{ backgroundColor: combo.bg }}
              >
                <span className="font-mono text-base font-bold" style={{ color: combo.fg }}>Aa</span>
              </div>

              {/* Info + copy */}
              <div className="p-3 flex-1 flex flex-col justify-center gap-1.5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">{combo.label}</p>
                  <span className={cn(
                    "font-mono text-[9px] px-1.5 py-0.5 rounded",
                    combo.mode === "Light"
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  )}>
                    {combo.mode}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <span>Text:</span>
                    <div className="w-3 h-3 rounded-sm border border-border" style={{ backgroundColor: combo.fg }} />
                    <CopyChip value={combo.fgHex} />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <span>BG:</span>
                    <div className="w-3 h-3 rounded-sm border border-border" style={{ backgroundColor: combo.bg }} />
                    <CopyChip value={combo.bgHex} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* What to avoid */}
      <SectionBlock id="avoid" title="What to Avoid">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              label: "No gradients",
              desc: "Gradients are not part of the Tsuin palette. They signal trends, not timelessness. Motion-only exception applies.",
              bad: "background: linear-gradient(...)",
            },
            {
              label: "No rainbow",
              desc: "One accent colour per mode. Multi-colour palettes read as consumer tools, not engineering infrastructure.",
              bad: "Using purple, teal, and blue simultaneously",
            },
            {
              label: "No opacity stacking",
              desc: "Avoid transparency layering on colour. It creates undefined tones outside the approved palette.",
              bad: "bg-primary/20 layered on bg-accent/30",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-[12px] text-muted-foreground leading-relaxed">{item.desc}</p>
              <p className="font-mono text-[10px] text-destructive/70 leading-snug">{item.bad}</p>
            </div>
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}
