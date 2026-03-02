import { SectionBlock } from "@/components/docs/SectionBlock";
import { cn } from "@/lib/utils";

interface PlaceholderAssetProps {
  label: string;
  sublabel?: string;
  aspect?: "wide" | "square" | "tall";
  dark?: boolean;
}

function PlaceholderAsset({ label, sublabel, aspect = "square", dark = false }: PlaceholderAssetProps) {
  return (
    <div
      className={cn(
        "rounded-lg border-2 border-dashed flex flex-col items-center justify-center gap-1.5 p-4",
        dark
          ? "border-zinc-600 bg-[hsl(235,24%,13%)]"
          : "border-border bg-muted/30",
        aspect === "wide" && "col-span-2",
        aspect === "tall" && "row-span-2"
      )}
      style={{ minHeight: aspect === "wide" ? "120px" : "140px" }}
    >
      <div className={cn(
        "font-mono text-[10px] uppercase tracking-widest font-bold",
        dark ? "text-zinc-500" : "text-muted-foreground/50"
      )}>
        {label}
      </div>
      {sublabel && (
        <div className={cn(
          "font-mono text-[9px]",
          dark ? "text-zinc-600" : "text-muted-foreground/30"
        )}>
          {sublabel}
        </div>
      )}
      <div className={cn(
        "mt-2 text-[9px] italic",
        dark ? "text-zinc-600" : "text-muted-foreground/30"
      )}>
        asset pending
      </div>
    </div>
  );
}

const CONTEXTS = [
  { context: "Website hero", priority: "Primary", note: "Full wordmark, all variants acceptable" },
  { context: "Desktop app", priority: "Primary", note: "Horizontal lockup preferred" },
  { context: "IDE plugin sidebar", priority: "Critical", note: "Symbol-only micro icon — must survive at 24px" },
  { context: "Enterprise dashboard", priority: "Secondary", note: "Horizontal or vertical lockup" },
  { context: "Social media profiles", priority: "Secondary", note: "Square crop — symbol or emblem variant" },
  { context: "Conference banners", priority: "Tertiary", note: "Full lockup with clear space enforced" },
  { context: "Merchandise", priority: "Tertiary", note: "Emblem variant preferred" },
];

const PRIORITY_COLOR: Record<string, string> = {
  Critical: "text-destructive",
  Primary: "text-primary",
  Secondary: "text-foreground",
  Tertiary: "text-muted-foreground",
};

export function BrandLogo() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div id="overview" className="scroll-mt-20 space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Logo System</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          The Tsuin.ai logo system is built around a single visual idea:{" "}
          <span className="font-semibold text-foreground">duality and reflection</span>. Every
          variant — from the full wordmark to the 16px favicon — expresses the twin metaphor
          at the core of the product.
        </p>
      </div>

      {/* Visual metaphor */}
      <SectionBlock id="metaphor" title="Visual Metaphor">
        <div className="rounded-xl border border-border bg-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-px bg-primary/40" />
            <p className="text-lg font-bold tracking-tight">Twin / Mirror / Reflection</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            The logo carries the visual language of duality — two things that are the same but
            aren't the same. Bilateral symmetry, mirror axis, reflection. The symbol must have
            bilateral symmetry to support clean motion transitions (flip, reveal, pulse) and to
            reinforce the product's core promise.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {[
              "A T letterform with a reflected axis",
              "Two marks that complete each other (positive/negative space)",
              "A subtle mirror line running through the wordmark",
              "The Shiba Inu mascot rendered as a paired/reflected form",
            ].map((direction) => (
              <div key={direction} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                {direction}
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* Logo variants */}
      <SectionBlock id="variants" title="Logo Variants">
        <p className="text-sm text-muted-foreground mb-5">
          Eight required variants covering all deployment contexts. Light and dark versions of
          each. Assets to be supplied by the designer.
        </p>

        <div className="space-y-6">
          <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-40 font-bold">Light Mode Variants</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <PlaceholderAsset label="Primary Horizontal" sublabel="Wordmark + Symbol" aspect="wide" />
            <PlaceholderAsset label="Vertical Stacked" sublabel="Symbol above wordmark" />
            <PlaceholderAsset label="Symbol Only" sublabel="T or TS mark" />
            <PlaceholderAsset label="Emblem / Badge" sublabel="Enclosed mark" />
            <PlaceholderAsset label="Micro Icon 24px" sublabel="IDE sidebar" />
            <PlaceholderAsset label="Favicon 16px" sublabel="Browser tab" />
          </div>

          <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-40 font-bold mt-6">Dark Mode Variants</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <PlaceholderAsset label="Primary Horizontal" sublabel="Wordmark + Symbol" aspect="wide" dark />
            <PlaceholderAsset label="Vertical Stacked" sublabel="Symbol above wordmark" dark />
            <PlaceholderAsset label="Symbol Only" sublabel="T or TS mark" dark />
            <PlaceholderAsset label="Emblem / Badge" sublabel="Enclosed mark" dark />
            <PlaceholderAsset label="Micro Icon 24px" sublabel="IDE sidebar" dark />
            <PlaceholderAsset label="Favicon 16px" sublabel="Browser tab" dark />
          </div>
        </div>
      </SectionBlock>

      {/* Clear space */}
      <SectionBlock id="clearspace" title="Clear Space">
        <p className="text-sm text-muted-foreground mb-5">
          The minimum clear space around the logo is defined by the cap height of the wordmark's
          first letter. No other visual element — text, imagery, edge — may intrude into this
          zone.
        </p>
        <div
          className="rounded-xl border-2 border-dashed border-border flex items-center justify-center bg-muted/20"
          style={{ minHeight: "200px" }}
        >
          <div className="text-center space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40 font-bold">
              Clear Space Diagram
            </div>
            <div className="font-mono text-[9px] text-muted-foreground/30 italic">
              asset pending
            </div>
          </div>
        </div>
        <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex gap-2.5 items-start">
            <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
            Minimum clear space = cap height of the wordmark
          </div>
          <div className="flex gap-2.5 items-start">
            <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
            Apply to all lockups including micro icon contexts
          </div>
        </div>
      </SectionBlock>

      {/* Micro icon */}
      <SectionBlock id="microicon" title="Micro Icon Requirements">
        <p className="text-sm text-muted-foreground mb-5">
          The symbol-only mark must survive at very small sizes. Complexity at scale fails.
          Simplicity is mandatory.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              size: "24px",
              context: "IDE plugin sidebar",
              priority: "Critical",
              note: "This is likely the most-seen version of the logo. Must be instantly recognisable. Single-weight, max 2 elements.",
            },
            {
              size: "16px",
              context: "Browser favicon",
              priority: "Critical",
              note: "At this size only the silhouette reads. The bilateral symmetry of the mark must survive. Test in browser tab before finalising.",
            },
          ].map((item) => (
            <div key={item.size} className="rounded-lg border border-border bg-card p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-lg font-bold text-foreground">{item.size}</span>
                <span className="text-xs text-destructive font-medium">{item.priority}</span>
              </div>
              <p className="text-xs text-primary font-medium">{item.context}</p>
              <p className="text-[12px] text-muted-foreground leading-relaxed">{item.note}</p>
              <div
                className="w-full rounded border-2 border-dashed border-border flex items-center justify-center bg-muted/20"
                style={{ height: "60px" }}
              >
                <span className="font-mono text-[9px] text-muted-foreground/30 italic">
                  asset pending
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Platform contexts */}
      <SectionBlock id="contexts" title="Platform Contexts">
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="text-left px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Context
                </th>
                <th className="text-left px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Priority
                </th>
                <th className="text-left px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:table-cell">
                  Note
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {CONTEXTS.map((row) => (
                <tr key={row.context}>
                  <td className="px-4 py-3 text-sm text-foreground font-medium">{row.context}</td>
                  <td className={cn("px-4 py-3 text-sm font-medium", PRIORITY_COLOR[row.priority])}>
                    {row.priority}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground hidden sm:table-cell">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      {/* Motion */}
      <SectionBlock id="motion" title="Motion Logo">
        <p className="text-sm text-muted-foreground mb-5">
          The logo is designed with animation potential in mind. The bilateral symmetry of the
          mark enables clean motion transitions. Motion is used for web hero reveals and Discord
          server branding — not in product UI.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { name: "Reveal", desc: "Mirror halves slide in from centre outward. Use: hero entrance on tsuin.ai" },
            { name: "Pulse", desc: "Subtle bilateral pulse on the axis. Use: loading state, Discord presence" },
            { name: "Flip", desc: "The mark flips on its axis to reveal the symbol. Use: animated favicon, Discord" },
          ].map((motion) => (
            <div key={motion.name} className="rounded-lg border border-border bg-card p-4 space-y-2">
              <div
                className="w-full rounded border-2 border-dashed border-border flex items-center justify-center bg-muted/20 mb-3"
                style={{ height: "72px" }}
              >
                <span className="font-mono text-[9px] text-muted-foreground/30 italic">
                  animation pending
                </span>
              </div>
              <p className="text-sm font-semibold text-foreground">{motion.name}</p>
              <p className="text-[12px] text-muted-foreground leading-relaxed">{motion.desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Do / Don't */}
      <SectionBlock id="usage" title="Usage Rules">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
              Do
            </h3>
            {[
              "Use approved logo files only — do not recreate.",
              "Maintain clear space at all sizes.",
              "Use the appropriate variant for the context (see Platform Contexts).",
              "Test the micro icon at actual size before shipping.",
              "Use the dark variant on dark backgrounds and light variant on light.",
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                {rule}
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-destructive font-bold">
              Don't
            </h3>
            {[
              "Do not stretch, skew, or rotate the logo.",
              "Do not recolour the logo outside the approved palette.",
              "Do not add drop shadows, gradients, or effects.",
              "Do not place the logo on a visually busy background.",
              "Do not use the full wordmark at sizes below 80px wide.",
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-destructive mt-1.5 shrink-0" />
                {rule}
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>
    </div>
  );
}
