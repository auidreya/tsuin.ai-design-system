import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { StateShowcase } from "@/components/docs/StateShowcase";
import { SectionBlock } from "@/components/docs/SectionBlock";
import { Search } from "lucide-react";

const PROPS = [
  { name: "type", type: "string", default: '"text"', description: "HTML input type attribute." },
  { name: "placeholder", type: "string", description: "Placeholder text shown when empty." },
  { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
  { name: "value", type: "string", description: "Controlled value." },
  { name: "onChange", type: "(e: ChangeEvent) => void", description: "Change event handler." },
  { name: "className", type: "string", description: "Additional Tailwind classes." },
];

export function InputDocs() {
  return (
    <div className="space-y-12">
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Input</h1>
        <p className="text-muted-foreground">
          A styled text input component. Supports all native HTML input attributes, with focus ring
          and disabled states built in.
        </p>
      </div>

      <SectionBlock id="variants" title="Variants & States">
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <Input placeholder="Default input" />
              <Input type="email" placeholder="Email address" />
              <Input type="password" placeholder="Password" />
              <Input disabled placeholder="Disabled input" />
            </div>
          }
          code={`<Input placeholder="Default input" />
<Input type="email" placeholder="Email address" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled input" />`}
        />

        <StateShowcase
          items={[
            { label: "Default", element: <Input placeholder="Type here..." className="w-44" /> },
            { label: "Disabled", element: <Input disabled placeholder="Disabled" className="w-44" /> },
            { label: "With Label", element: <div className="flex flex-col gap-1.5"><Label>Name</Label><Input placeholder="John" className="w-44" /></div> },
            { label: "Search", element: <div className="relative w-44"><Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" /><Input placeholder="Search..." className="pl-8" /></div> },
          ]}
          columns={2}
        />
      </SectionBlock>

      <SectionBlock id="props" title="Props">
        <PropsTable props={PROPS} />
      </SectionBlock>

      <SectionBlock id="accessibility" title="Accessibility">
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>Always pair an Input with a visible <code className="font-mono text-xs text-primary">Label</code> or <code className="font-mono text-xs text-primary">aria-label</code>.</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Use <code className="font-mono text-xs text-primary">htmlFor</code> on Label matching the input's <code className="font-mono text-xs text-primary">id</code></li>
            <li>Add <code className="font-mono text-xs text-primary">aria-invalid="true"</code> and <code className="font-mono text-xs text-primary">aria-describedby</code> for validation errors</li>
            <li>Focus ring is visible in all browser high-contrast modes</li>
          </ul>
        </div>
      </SectionBlock>
    </div>
  );
}
