import { useState } from "react";
import { SectionBlock } from "@/components/docs/SectionBlock";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

const darkModules = import.meta.glob<string>(
  "../../mascot/mascot-dark/*.svg",
  { eager: true, query: "?url", import: "default" }
);

const lightModules = import.meta.glob<string>(
  "../../mascot/mascot-light/*.svg",
  { eager: true, query: "?url", import: "default" }
);

const descriptions: Record<string, string> = {
  ball: "Shibasuke in playful mode, chasing a ball with boundless energy.",
  cookie: "Shibasuke indulging in a well-deserved cookie treat.",
  mascot: "The official Shibasuke mascot — the heart of Antigravity Design.",
  rofl: "Shibasuke in full ROFL mode, rolling on the floor with laughter.",
  running: "Shibasuke sprinting at full speed, always on the move.",
  sleep: "Shibasuke in deep slumber — available in dark mode only.",
  snack: "Shibasuke contentedly snacking away between design sessions.",
  stretching: "Shibasuke stretching out before tackling the next big challenge.",
};

interface Asset {
  filename: string;
  title: string;
  pose: string;
  url: string;
}

function parseAssets(modules: Record<string, string>): Asset[] {
  return Object.entries(modules)
    .map(([path, url]) => {
      const filename = path.split("/").pop()!.replace(".svg", "");
      const pose = filename.split("-").pop()!;
      const title = pose.charAt(0).toUpperCase() + pose.slice(1);
      return { filename, title, pose, url };
    })
    .sort((a, b) => a.pose.localeCompare(b.pose));
}

const darkAssets = parseAssets(darkModules);
const lightAssets = parseAssets(lightModules);

type Variant = "light" | "dark";

export function MascotDocs() {
  const [variant, setVariant] = useState<Variant>("light");
  const assets = variant === "light" ? darkAssets : lightAssets;

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Mascot</h1>
        <p className="text-muted-foreground leading-relaxed">
          Meet <span className="font-semibold text-foreground">Shibasuke</span> — the Antigravity
          Design System mascot. Available in light and dark variants across a range of expressive
          poses, perfect for onboarding flows, empty states, error pages, and delightful moments
          throughout your product.
        </p>
      </div>

      {/* Assets gallery */}
      <SectionBlock id="assets" title="Assets">
        {/* Variant toggle */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted w-fit mb-6">
          {(["light", "dark"] as Variant[]).map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={cn(
                "px-4 py-1.5 rounded-md text-sm font-medium capitalize transition-all",
                variant === v
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {v}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {assets.map(({ filename, title, pose, url }) => (
            <div
              key={filename}
              className="group relative flex flex-col rounded-xl border border-border overflow-hidden bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              {/* Preview area */}
              <div
                className="flex items-center justify-center h-40 w-full"
                style={{
                  backgroundColor: variant === "dark"
                    ? "hsl(235 24% 13%)"
                    : "hsl(44 87% 94%)",
                }}
              >
                <img
                  src={url}
                  alt={title}
                  className="h-28 w-28 object-contain drop-shadow-sm"
                />
              </div>

              {/* Download overlay */}
              <a
                href={url}
                download={`${filename}.svg`}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-md bg-background/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground"
                title="Download SVG"
              >
                <Download size={13} />
              </a>

              {/* Info */}
              <div className="p-3 flex flex-col gap-1 flex-1">
                <p className="font-semibold text-sm text-foreground">{title}</p>
                <p className="font-mono text-[10px] text-muted-foreground/70 tracking-tight truncate">
                  {filename}.svg
                </p>
                <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                  {descriptions[pose] ?? "A Shibasuke mascot illustration."}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Count badge */}
        <p className="text-xs text-muted-foreground mt-4">
          {assets.length} asset{assets.length !== 1 ? "s" : ""} in{" "}
          <span className="font-mono">{variant}</span> variant
        </p>
      </SectionBlock>

      {/* Usage */}
      <SectionBlock id="usage" title="Usage">
        <p className="text-sm text-muted-foreground mb-4">
          Mascot SVGs are available in both light and dark variants. Use the appropriate variant
          based on the surface they appear on.
        </p>
        <div className="rounded-lg border border-border bg-muted/40 p-4 font-mono text-xs text-foreground/80 space-y-1">
          <p className="text-muted-foreground">{`<!-- Light variant -->`}</p>
          <p>{`<img src="/mascot/mascot-light/shibasuke-light-mascot.svg" alt="Shibasuke" />`}</p>
          <p className="mt-3 text-muted-foreground">{`<!-- Dark variant -->`}</p>
          <p>{`<img src="/mascot/mascot-dark/shibasuke-dark-mascot.svg" alt="Shibasuke" />`}</p>
        </div>
      </SectionBlock>
    </div>
  );
}
