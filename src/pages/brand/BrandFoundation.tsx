import { SectionBlock } from "@/components/docs/SectionBlock";
import { Badge } from "@/components/ui/badge";

const EMOTIONAL_PILLARS = [
  {
    label: "Mirroring",
    description:
      "The logo and brand evoke the sensation of seeing your own thought process reflected back. Not a tool you use — a version of you that exists alongside you.",
  },
  {
    label: "Intelligent",
    description:
      "Not flashy smart, but quietly precise. The kind of intelligence a senior engineer respects: measured, deep, and right when it counts.",
  },
  {
    label: "Futuristic",
    description:
      "Forward-looking without being sci-fi costume. We are building infrastructure for how engineering teams will work in the next decade.",
  },
  {
    label: "Trusted Collaboration",
    description:
      "Human and AI working as equals. Tsuin is not a subordinate. It is a peer — a version of you with perfect memory.",
  },
];

const AVOID = [
  { label: "Crypto bro", reason: "Signals speculation, not craft" },
  { label: "Chatbot toy", reason: "Signals surface-level utility" },
  { label: "Corporate boring", reason: "Signals Salesforce / Oracle energy" },
  { label: "AI robot cliché", reason: "Signals every other AI startup" },
  { label: "OpenAI imitation", reason: "Direct competitor visual confusion" },
];

const ADMIRE = [
  { name: "Cline", note: "Developer-native, dark, precise" },
  { name: "Letta", note: "Clean, dark-mode-first, technically credible" },
  { name: "Anthropic", note: "Restrained, intelligent, institutional without corporate" },
  { name: "Mixpanel", note: "Confident color use, product analytics energy" },
  { name: "PostHog", note: "Developer-first, personality without being a toy" },
];

const AVOID_BRANDS = [
  { name: "OpenAI", reason: "Direct visual competitor, will cause confusion" },
  { name: "Salesforce", reason: "Enterprise SaaS — wrong audience signal" },
  { name: "Oracle", reason: "Legacy software energy, instant rejection from our audience" },
  { name: "Monday.com", reason: "Consumer/ops tool, not engineering-grade" },
];

export function BrandFoundation() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div id="overview" className="scroll-mt-20 space-y-3">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="font-mono text-xs">Brand</Badge>
          <Badge variant="outline" className="font-mono text-xs">v1.0 — March 2026</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Brand Foundation</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          The strategic principles that define what Tsuin.ai is, who it's for, and how every
          design decision should feel. This is not a style guide — it is the reasoning behind
          every style decision.
        </p>
      </div>

      {/* Mission */}
      <SectionBlock id="mission" title="The Mission">
        <blockquote className="border-l-2 border-primary pl-5 py-1 my-4">
          <p className="text-lg font-medium text-foreground leading-relaxed">
            Tsuin.ai gives every software developer an AI Twin of their own — capturing their
            thought process, code logic, decisions, and style — so their knowledge can be shared
            with teammates for software maintenance automation, system integrations, and faster
            onboarding.
          </p>
        </blockquote>

        <div className="mt-6 space-y-3">
          <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-40 font-bold">
            Perceived Category
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">AI Digital Clone of a Human</span> —
            not a chatbot, not a copilot, not an assistant. A persistent intelligence that mirrors{" "}
            <em>how you think</em>, not just what you type. This distinction is the entire brand.
            Every visual and verbal decision should reinforce it.
          </p>
        </div>
      </SectionBlock>

      {/* Audience */}
      <SectionBlock id="audience" title="Primary Audience">
        <div className="rounded-xl border border-border bg-card p-5 space-y-3">
          <p className="text-sm font-semibold text-foreground">The Hardcore Senior Developer</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            They architect entire systems mentally before writing a single line of code. They
            understand the deep pain of software maintenance, institutional knowledge loss, and
            onboarding entropy. They are skeptical, precise, and have high standards for tools
            they adopt.
          </p>
          <div className="pt-3 border-t border-border grid sm:grid-cols-3 gap-3">
            {[
              { label: "Skeptical", desc: "Slow to adopt, fast to reject. Earns trust through quality, not marketing." },
              { label: "Precise", desc: "Notices the details. Sloppy design signals a sloppy product." },
              { label: "Experienced", desc: "Has seen every trend. Rewards timelessness. Punishes posturing." },
            ].map((trait) => (
              <div key={trait.label} className="space-y-1">
                <p className="text-xs font-semibold text-foreground">{trait.label}</p>
                <p className="text-[11px] text-muted-foreground leading-snug">{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* Emotional territory */}
      <SectionBlock id="emotional-territory" title="Emotional Territory">
        <p className="text-sm text-muted-foreground mb-5">
          Four pillars define how the brand should feel. Every design decision — color, type,
          spacing, motion — should be traceable back to at least one of these.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {EMOTIONAL_PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="rounded-lg border border-border bg-card p-4 space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                <p className="text-sm font-semibold text-foreground">{pillar.label}</p>
              </div>
              <p className="text-[12px] text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* What to avoid */}
      <SectionBlock id="avoid" title="What the Brand Must Not Feel Like">
        <p className="text-sm text-muted-foreground mb-4">
          Our audience will reject these associations immediately. Avoid them categorically.
        </p>
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="text-left px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Avoid
                </th>
                <th className="text-left px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Why
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {AVOID.map((item) => (
                <tr key={item.label}>
                  <td className="px-4 py-3 text-sm text-destructive font-medium">{item.label}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{item.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      {/* Competitive landscape */}
      <SectionBlock id="competitive" title="Competitive Landscape">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-40 font-bold">
              Brands We Admire
            </h3>
            <p className="text-[11px] text-muted-foreground mb-3">
              Visual reference — not to imitate, but to understand the quality bar.
            </p>
            <div className="space-y-2">
              {ADMIRE.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-start gap-3 rounded-md border border-border px-3 py-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">{brand.name}</p>
                    <p className="text-[11px] text-muted-foreground">{brand.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-40 font-bold">
              Brands We Must Not Resemble
            </h3>
            <p className="text-[11px] text-muted-foreground mb-3">
              Our audience will draw the comparison and reject us for it.
            </p>
            <div className="space-y-2">
              {AVOID_BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-start gap-3 rounded-md border border-destructive/20 px-3 py-2.5 bg-destructive/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">{brand.name}</p>
                    <p className="text-[11px] text-muted-foreground">{brand.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* Risk tolerance */}
      <SectionBlock id="principles" title="Design Principles">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              title: "Timeless over trendy",
              body: "Not optimising for Q1 2026. Building a brand a senior developer will still respect in 5 years. Avoid glassmorphism, bento grids, oversized blob shapes.",
            },
            {
              title: "Geometry over decoration",
              body: "Precision is the aesthetic. No gradients for decoration. No drop shadows for drama. Restraint is confidence.",
            },
            {
              title: "Scale to Enterprise",
              body: "The brand system must accommodate Tsuin Enterprise as a future sub-brand without a full redesign. Modularity from day one.",
            },
          ].map((p) => (
            <div key={p.title} className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">{p.title}</p>
              <p className="text-[12px] text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Emotional anchor */}
      <SectionBlock id="anchor" title="Emotional Anchor">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center space-y-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary/60">
            The one thing that must be expressed
          </p>
          <blockquote className="text-xl font-bold text-foreground tracking-tight">
            "Mirroring each other. Like a Twin."
          </blockquote>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Every design decision — the symmetry of the mark, the reflection implicit in the
            wordmark, the pairing of two typefaces, the duality of light and dark mode — should
            serve this single emotional truth.
          </p>
        </div>
      </SectionBlock>
    </div>
  );
}
