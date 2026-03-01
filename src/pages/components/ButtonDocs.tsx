import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { StateShowcase } from "@/components/docs/StateShowcase";
import { SectionBlock } from "@/components/docs/SectionBlock";
import { Loader2, ArrowRight, Mail } from "lucide-react";

const PROPS = [
  { name: "variant", type: `"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"`, default: '"default"', description: "Visual style of the button." },
  { name: "size", type: `"default" | "sm" | "lg" | "icon"`, default: '"default"', description: "Size of the button." },
  { name: "asChild", type: "boolean", default: "false", description: "Merge props onto child element via Radix Slot." },
  { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction and dims the button." },
  { name: "className", type: "string", description: "Additional Tailwind classes." },
];

export function ButtonDocs() {
  return (
    <div className="space-y-12">
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Button</h1>
        <p className="text-muted-foreground">
          Displays a button or a component that looks like a button. Built on Radix UI Slot with
          full keyboard and accessibility support.
        </p>
      </div>

      <SectionBlock id="variants" title="Variants">
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-3 justify-center">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          }
          code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}
        />

        <StateShowcase
          items={[
            { label: "Default", element: <Button>Click me</Button> },
            { label: "Secondary", element: <Button variant="secondary">Secondary</Button> },
            { label: "Outline", element: <Button variant="outline">Outline</Button> },
            { label: "Ghost", element: <Button variant="ghost">Ghost</Button> },
            { label: "Destructive", element: <Button variant="destructive">Delete</Button> },
            { label: "Link", element: <Button variant="link">Link</Button> },
            { label: "Small", element: <Button size="sm">Small</Button> },
            { label: "Large", element: <Button size="lg">Large</Button> },
            { label: "Icon", element: <Button size="icon"><ArrowRight /></Button> },
            { label: "With Icon", element: <Button><Mail />Email</Button> },
            { label: "Loading", element: <Button disabled><Loader2 className="animate-spin" />Loading</Button> },
            { label: "Disabled", element: <Button disabled>Disabled</Button> },
          ]}
          columns={4}
        />
      </SectionBlock>

      <SectionBlock id="props" title="Props">
        <PropsTable props={PROPS} />
      </SectionBlock>

      <SectionBlock id="accessibility" title="Accessibility">
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>The Button uses a native <code className="font-mono text-xs text-primary">&lt;button&gt;</code> element, ensuring full accessibility out of the box.</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">Enter</kbd> / <kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">Space</kbd> — activates the button</li>
            <li><kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">Tab</kbd> — moves focus to the button</li>
            <li>When <code className="font-mono text-xs text-primary">disabled</code>, the button receives <code className="font-mono text-xs text-primary">aria-disabled</code> and cannot be focused</li>
            <li>Use <code className="font-mono text-xs text-primary">aria-label</code> for icon-only buttons</li>
          </ul>
        </div>
      </SectionBlock>
    </div>
  );
}
