import { SectionBlock } from "@/components/docs/SectionBlock";
import { cn } from "@/lib/utils";

const TYPE_SCALE = [
  { name: "Display", size: "48px / 3rem", weight: "700", face: "Funnel Display", usage: "Hero sections, landing page headlines" },
  { name: "H1", size: "36px / 2.25rem", weight: "700", face: "Funnel Display", usage: "Page titles" },
  { name: "H2", size: "24px / 1.5rem", weight: "600", face: "Funnel Display", usage: "Section headings" },
  { name: "H3", size: "18px / 1.125rem", weight: "600", face: "Funnel Display", usage: "Subsection headings, card titles" },
  { name: "Body", size: "14px / 0.875rem", weight: "400", face: "JetBrains Mono", usage: "All body copy, descriptions, prose" },
  { name: "Label", size: "12px / 0.75rem", weight: "500", face: "JetBrains Mono", usage: "UI labels, form fields, nav items" },
  { name: "Caption", size: "11px / 0.6875rem", weight: "400", face: "JetBrains Mono", usage: "Metadata, timestamps, helper text" },
  { name: "Code", size: "12px / 0.75rem", weight: "400", face: "JetBrains Mono", usage: "Inline code, code blocks, tokens" },
  { name: "Micro", size: "10px / 0.625rem", weight: "700", face: "JetBrains Mono", usage: "Section labels, uppercase tags, badges" },
];

function ExampleLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40 mb-4", className)}>
      {children}
    </p>
  );
}

function Annotation({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("font-mono text-[10px] text-muted-foreground/40 mt-3 border-t border-border pt-3", className)}>
      {children}
    </p>
  );
}

export function BrandTypography() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div id="overview" className="scroll-mt-20 space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Typography</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          The Tsuin.ai typographic system is built on two typefaces only. No third face, ever.
          The pairing is intentional: one for human expression, one for machine precision.
        </p>
      </div>

      {/* The two-typeface rule */}
      <SectionBlock id="system" title="The Two-Typeface Rule">
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Funnel Display */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Display / Hero</p>
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-muted text-muted-foreground">asset pending</span>
              </div>
              <p className="text-2xl font-bold tracking-tight">Funnel Display</p>
            </div>
            <div className="rounded-lg border-2 border-dashed border-border bg-muted/20 flex items-center justify-center" style={{ minHeight: "100px" }}>
              <div className="text-center space-y-1">
                <p className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">Type specimen</p>
                <p className="font-mono text-[9px] text-muted-foreground/25 italic">(add Funnel Display font to render)</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">Source:</span> Google Fonts</p>
              <p><span className="text-foreground font-medium">Weights used:</span> 600 SemiBold, 700 Bold</p>
              <p><span className="text-foreground font-medium">Use for:</span> Hero headlines, display text, page titles, section headings.</p>
              <p><span className="text-foreground font-medium">Never use for:</span> Body copy, UI labels, code.</p>
            </div>
          </div>

          {/* JetBrains Mono */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Monospace / Code / UI</p>
              <p className="text-2xl font-bold tracking-tight font-mono">JetBrains Mono</p>
            </div>
            <div className="rounded-lg border border-border bg-[hsl(235,24%,13%)] p-4 space-y-1.5">
              <p className="font-mono text-[11px] text-[#c0caf5]">const twin = new AiTwin(developer);</p>
              <p className="font-mono text-[11px] text-[#7aa2f7]">await twin.captureThoughtProcess();</p>
              <p className="font-mono text-[11px] text-[#bb9af7]">// Knowledge persists. Minds scale.</p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">Source:</span> JetBrains (free)</p>
              <p><span className="text-foreground font-medium">Weights used:</span> 400 Regular, 500 Medium, 700 Bold</p>
              <p><span className="text-foreground font-medium">Use for:</span> All body copy, UI labels, navigation, code blocks, captions.</p>
              <p><span className="text-foreground font-medium">Why mono for UI:</span> Signals precision and developer-nativity. Our audience reads monotype all day.</p>
            </div>
          </div>
        </div>
        <div className="mt-4 p-4 rounded-lg border border-border bg-primary/5 text-sm text-muted-foreground">
          <strong className="text-foreground">The pairing logic</strong> — Funnel Display speaks for the human side: expressive, confident, emotional. JetBrains Mono speaks for the machine side: precise, consistent, reliable. Together they mirror the product itself — a human mind and its AI twin.
        </div>
      </SectionBlock>

      {/* Type scale */}
      <SectionBlock id="scale" title="Type Scale">
        <p className="text-sm text-muted-foreground mb-5">
          The complete typographic scale with face assignment, size, and usage context. Do not introduce sizes outside this system.
        </p>
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                {["Level", "Size", "Weight", "Face", "Usage"].map((h) => (
                  <th key={h} className="text-left px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {TYPE_SCALE.map((row) => (
                <tr key={row.name} className="hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground text-sm">{row.name}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{row.size}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{row.weight}</td>
                  <td className="px-4 py-3 text-xs text-primary font-mono">{row.face}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground hidden md:table-cell">{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      {/* Pairing in context */}
      <SectionBlock id="pairing" title="Pairing in Context">
        <p className="text-sm text-muted-foreground mb-5">
          How the two typefaces work together across real product surfaces.
        </p>
        <div className="space-y-4">

          {/* 1. Hero */}
          <div className="rounded-xl border border-border p-6 bg-card">
            <ExampleLabel>Hero / Landing page</ExampleLabel>
            <p className="text-4xl font-bold tracking-tight text-foreground leading-tight">
              Your knowledge,<br />always available.
            </p>
            <p className="font-mono text-sm text-muted-foreground mt-3 max-w-md leading-relaxed">
              Tsuin captures how you think — not just what you type — so your entire engineering
              mind is available to your team, forever.
            </p>
            <div className="flex gap-2 mt-4">
              <div className="h-8 px-4 rounded-md bg-primary flex items-center">
                <span className="font-mono text-xs text-primary-foreground font-medium">Get early access</span>
              </div>
              <div className="h-8 px-4 rounded-md border border-border flex items-center">
                <span className="font-mono text-xs text-muted-foreground">See how it works</span>
              </div>
            </div>
            <Annotation>Headline: Funnel Display 700 · Body: JetBrains Mono 400 · Buttons: JetBrains Mono 500</Annotation>
          </div>

          {/* 2. Product UI */}
          <div className="rounded-xl border border-border p-5 bg-card">
            <ExampleLabel>Product UI / Dashboard</ExampleLabel>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-mono text-sm font-medium text-foreground">Active Twin Sessions</p>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">3 running</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { name: "auth-service", status: "syncing..." },
                  { name: "data-pipeline", status: "captured 42 decisions" },
                  { name: "api-gateway", status: "idle" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-md border border-border px-3 py-2">
                    <span className="font-mono text-xs text-foreground">{item.name}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <Annotation>All UI text: JetBrains Mono · Section heading: 500 Medium · Row labels: 400 Regular · Meta: 400 Regular smaller</Annotation>
          </div>

          {/* 3. Documentation / Long-form */}
          <div className="rounded-xl border border-border p-6 bg-card">
            <ExampleLabel>Documentation / Long-form prose</ExampleLabel>
            <p className="text-xl font-bold tracking-tight text-foreground mb-1">How Tsuin captures decisions</p>
            <p className="font-mono text-[10px] text-muted-foreground mb-4">Last updated · March 2026 · 4 min read</p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-3">
              When you commit code, Tsuin reads your diff, your commit message, and any linked
              comments. It builds a contextual record — not just of <em className="text-foreground not-italic">what</em> changed,
              but of <em className="text-foreground not-italic">why</em>.
            </p>
            <div className="rounded-md border border-border bg-[hsl(235,24%,13%)] px-4 py-3 mb-3">
              <p className="font-mono text-[11px] text-[#c0caf5]">tsuin.context.record(&#123;</p>
              <p className="font-mono text-[11px] text-[#7aa2f7] pl-4">decision: "moved auth to middleware",</p>
              <p className="font-mono text-[11px] text-[#7aa2f7] pl-4">reason: "reduce duplication across 4 routes",</p>
              <p className="font-mono text-[11px] text-[#c0caf5]">&#125;);</p>
            </div>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              This record is attached to the relevant files and surfaces when a teammate opens
              that code — in their IDE, in PR review, or via the Tsuin query interface.
            </p>
            <Annotation>Section title: Funnel Display 700 · Body: JetBrains Mono 400 · Code block: JetBrains Mono 400 · Caption: JetBrains Mono 400 smaller</Annotation>
          </div>

          {/* 4. Empty state */}
          <div className="rounded-xl border border-border p-8 bg-card flex flex-col items-center text-center">
            <ExampleLabel>Empty state</ExampleLabel>
            <div className="w-16 h-16 rounded-xl border-2 border-dashed border-border flex items-center justify-center mb-5 text-muted-foreground/30">
              <span className="font-mono text-[9px]">mascot</span>
            </div>
            <p className="text-xl font-bold tracking-tight text-foreground mb-2">No sessions yet</p>
            <p className="font-mono text-sm text-muted-foreground max-w-xs leading-relaxed mb-5">
              Connect your IDE extension to start capturing your first twin session.
            </p>
            <div className="h-8 px-4 rounded-md bg-primary flex items-center">
              <span className="font-mono text-xs text-primary-foreground font-medium">Connect IDE</span>
            </div>
            <Annotation>Headline: Funnel Display 600 · Body: JetBrains Mono 400 · CTA: JetBrains Mono 500</Annotation>
          </div>

          {/* 5. Onboarding card */}
          <div className="rounded-xl border border-border p-5 bg-card">
            <ExampleLabel>Onboarding card</ExampleLabel>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <span className="font-mono text-xs text-primary font-bold">1</span>
              </div>
              <div className="space-y-1.5">
                <p className="text-base font-bold tracking-tight text-foreground">Install the IDE extension</p>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  Available for VS Code and JetBrains IDEs. The extension runs locally — no code
                  leaves your machine without your explicit approval.
                </p>
                <div className="flex gap-2 pt-1">
                  <div className="h-7 px-3 rounded-md border border-border flex items-center">
                    <span className="font-mono text-[11px] text-muted-foreground">VS Code</span>
                  </div>
                  <div className="h-7 px-3 rounded-md border border-border flex items-center">
                    <span className="font-mono text-[11px] text-muted-foreground">JetBrains</span>
                  </div>
                </div>
              </div>
            </div>
            <Annotation>Step title: Funnel Display 700 · Body: JetBrains Mono 400 · Buttons: JetBrains Mono 400</Annotation>
          </div>

          {/* 6. Navigation / Sidebar */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <ExampleLabel className="px-5 pt-5">Navigation / Sidebar</ExampleLabel>
            <div className="flex">
              <div className="w-52 border-r border-border p-3 space-y-4">
                {[
                  { section: "Brand", items: ["Foundation", "Logo System", "Typography"] },
                  { section: "Components", items: ["Button", "Input"] },
                ].map((group) => (
                  <div key={group.section}>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40 font-bold px-3 mb-2">
                      {group.section}
                    </p>
                    {group.items.map((item, i) => (
                      <div key={item} className={cn(
                        "px-3 py-1.5 rounded text-xs font-mono",
                        i === 2 && group.section === "Brand"
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground"
                      )}>
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex-1 p-5">
                <p className="text-2xl font-bold tracking-tight text-foreground mb-1">Typography</p>
                <p className="font-mono text-xs text-muted-foreground">Two typefaces. No exceptions.</p>
              </div>
            </div>
            <Annotation className="px-5 pb-4">Section labels: JetBrains Mono 700 uppercase · Nav items: JetBrains Mono 400/600 · Page title: Funnel Display 700 · Subtitle: JetBrains Mono 400</Annotation>
          </div>

        </div>
      </SectionBlock>

      {/* Rules */}
      <SectionBlock id="rules" title="Usage Rules">
        <p className="text-sm text-muted-foreground mb-6">
          Each rule shown with a visual example of correct and incorrect application.
        </p>
        <div className="space-y-5">

          {/* Rule 1 */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="px-4 py-3 bg-muted/40 border-b border-border">
              <p className="font-mono text-xs font-semibold text-foreground">Rule 1 — Funnel Display for hero and display text only</p>
            </div>
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="p-4 space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-primary font-bold">Do</p>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-2xl font-bold tracking-tight text-foreground">Build your AI Twin.</p>
                  <p className="font-mono text-sm text-muted-foreground mt-1">Start capturing in minutes.</p>
                </div>
                <p className="text-[11px] text-muted-foreground">Funnel Display for the headline. Mono for the supporting line.</p>
              </div>
              <div className="p-4 space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-destructive font-bold">Don't</p>
                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                  <p className="font-mono text-2xl font-bold tracking-tight text-foreground">Build your AI Twin.</p>
                  <p className="font-mono text-sm text-muted-foreground mt-1">Start capturing in minutes.</p>
                </div>
                <p className="text-[11px] text-muted-foreground">JetBrains Mono for a hero headline loses expressiveness and visual contrast with the body.</p>
              </div>
            </div>
          </div>

          {/* Rule 2 */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="px-4 py-3 bg-muted/40 border-b border-border">
              <p className="font-mono text-xs font-semibold text-foreground">Rule 2 — Uppercase + tracking for micro-labels</p>
            </div>
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="p-4 space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-primary font-bold">Do</p>
                <div className="rounded-lg border border-border bg-card p-4 space-y-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50 font-bold">Components</p>
                  <div className="space-y-1">
                    <div className="font-mono text-xs text-muted-foreground px-2 py-1">Button</div>
                    <div className="font-mono text-xs text-muted-foreground px-2 py-1">Input</div>
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground">10px bold uppercase mono. Creates clear hierarchy without size difference.</p>
              </div>
              <div className="p-4 space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-destructive font-bold">Don't</p>
                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 space-y-3">
                  <p className="font-mono text-xs text-muted-foreground font-medium">Components</p>
                  <div className="space-y-1">
                    <div className="font-mono text-xs text-muted-foreground px-2 py-1">Button</div>
                    <div className="font-mono text-xs text-muted-foreground px-2 py-1">Input</div>
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground">Same size and case as nav items — no distinction between section label and item.</p>
              </div>
            </div>
          </div>

          {/* Rule 3 */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="px-4 py-3 bg-muted/40 border-b border-border">
              <p className="font-mono text-xs font-semibold text-foreground">Rule 3 — No third typeface</p>
            </div>
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="p-4 space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-primary font-bold">Do</p>
                <div className="rounded-lg border border-border bg-card p-4 space-y-1">
                  <p className="text-lg font-bold tracking-tight text-foreground">Capture everything.</p>
                  <p className="font-mono text-sm text-muted-foreground">Two typefaces. Every surface. No exceptions.</p>
                </div>
                <p className="text-[11px] text-muted-foreground">Funnel Display + JetBrains Mono. Two voices — human and machine.</p>
              </div>
              <div className="p-4 space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-destructive font-bold">Don't</p>
                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 space-y-1">
                  <p className="text-lg font-bold tracking-tight text-foreground">Capture everything.</p>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: "Georgia, serif" }}>Two typefaces. Every surface. No exceptions.</p>
                  <p className="font-mono text-[10px] text-destructive/60 mt-2">↑ Georgia introduced as "editorial" — violates the two-face rule.</p>
                </div>
                <p className="text-[11px] text-muted-foreground">A third typeface fractures the brand voice and erodes the dual-typeface metaphor.</p>
              </div>
            </div>
          </div>

          {/* Rule 4 */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="px-4 py-3 bg-muted/40 border-b border-border">
              <p className="font-mono text-xs font-semibold text-foreground">Rule 4 — Use the weight scale, not arbitrary weights</p>
            </div>
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="p-4 space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-primary font-bold">Do</p>
                <div className="rounded-lg border border-border bg-card p-4 space-y-2">
                  <p className="font-mono text-sm font-bold text-foreground">Active Twin Sessions</p>
                  <p className="font-mono text-xs font-medium text-foreground">auth-service</p>
                  <p className="font-mono text-xs text-muted-foreground">Last captured 2 minutes ago</p>
                </div>
                <p className="text-[11px] text-muted-foreground">Bold (700) → Medium (500) → Regular (400). Clear hierarchy.</p>
              </div>
              <div className="p-4 space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-destructive font-bold">Don't</p>
                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 space-y-2">
                  <p className="font-mono text-sm font-semibold text-foreground">Active Twin Sessions</p>
                  <p className="font-mono text-xs font-semibold text-foreground">auth-service</p>
                  <p className="font-mono text-xs font-semibold text-muted-foreground">Last captured 2 minutes ago</p>
                </div>
                <p className="text-[11px] text-muted-foreground">All SemiBold — no hierarchy. Everything competes for attention.</p>
              </div>
            </div>
          </div>

        </div>
      </SectionBlock>
    </div>
  );
}
