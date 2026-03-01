import { SectionBlock } from "@/components/docs/SectionBlock";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TOKEN_GROUPS = [
  {
    title: "Solarized Light (Teal)",
    tokens: [
      { name: "--background", value: "hsl(44 87% 94%)", description: "Page background" },
      { name: "--foreground", value: "hsl(192 10% 20%)", description: "Body text" },
      { name: "--primary", value: "hsl(175 59% 40%)", description: "Teal — buttons, links, active states" },
      { name: "--secondary", value: "hsl(45 47% 89%)", description: "Subtle surfaces" },
      { name: "--border", value: "hsl(45 20% 80%)", description: "UI borders" },
    ],
  },
  {
    title: "Tokyo Night Storm (Dark)",
    tokens: [
      { name: "--background", value: "hsl(235 24% 13%)", description: "Page background" },
      { name: "--foreground", value: "hsl(228 35% 85%)", description: "Body text" },
      { name: "--primary", value: "hsl(221 92% 72%)", description: "Blue — buttons, links, active states" },
      { name: "--accent", value: "hsl(261 88% 79%)", description: "Purple — decorative accents" },
      { name: "--border", value: "hsl(231 15% 30%)", description: "UI borders" },
    ],
  },
];

export function GettingStarted() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div id="overview" className="scroll-mt-20 space-y-3">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="font-mono text-xs">v0.1.0</Badge>
          <Badge variant="outline" className="font-mono text-xs">React + TypeScript</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Antigravity Design System</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A production-ready component library built on ShadCN UI, Radix primitives, and Tailwind CSS —
          themed with <strong className="text-foreground">Solarized Teal</strong> (light) and{" "}
          <strong className="text-foreground">Tokyo Night Storm</strong> (dark).
        </p>
        <Separator className="my-6" />
      </div>

      {/* Installation */}
      <SectionBlock id="installation" title="Installation">
        <p className="text-sm text-muted-foreground">Clone the repo and install dependencies:</p>
        <div className="rounded-lg border border-border bg-[#1a1b26] overflow-hidden">
          <pre className="p-4 text-xs leading-loose font-mono text-[#a9b1d6]">
{`# Clone
git clone <repo-url>
cd claude-figma-design-system

# Install
npm install

# Start dev server
npm run dev`}
          </pre>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          The dev server starts at <code className="text-primary font-mono text-xs">http://localhost:5173</code>.
        </p>
      </SectionBlock>

      {/* Theming */}
      <SectionBlock id="theming" title="Theming">
        <p className="text-sm text-muted-foreground mb-4">
          The design system uses CSS custom properties for all color tokens. Two themes are included:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {TOKEN_GROUPS.map((group) => (
            <Card key={group.title}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">{group.title}</CardTitle>
                <CardDescription className="text-xs">Applied via :root / .dark selectors</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {group.tokens.map((token) => (
                    <li key={token.name} className="flex items-start gap-3">
                      <code className="font-mono text-[10px] text-primary shrink-0">{token.name}</code>
                      <div className="min-w-0">
                        <code className="font-mono text-[10px] text-muted-foreground block">{token.value}</code>
                        <span className="text-[10px] text-muted-foreground/60">{token.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-4 p-4 rounded-lg border border-border bg-primary/5 text-sm text-muted-foreground">
          <strong className="text-foreground">Theme toggle</strong> — click the moon/sun icon in the header.
          Preference is persisted in <code className="font-mono text-xs text-primary">localStorage</code>.
        </div>
      </SectionBlock>

      {/* Quick Start */}
      <SectionBlock id="quickstart" title="Quick Start">
        <div className="rounded-lg border border-border bg-[#1a1b26] overflow-hidden">
          <pre className="p-4 text-xs leading-loose font-mono text-[#a9b1d6]">
{`import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Hello, Antigravity <Badge>New</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
        <Button variant="outline" className="ml-2">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}`}
          </pre>
        </div>
      </SectionBlock>
    </div>
  );
}
