import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { StateShowcase } from "@/components/docs/StateShowcase";
import { SectionBlock } from "@/components/docs/SectionBlock";

const PROPS = [
  { name: "checked", type: `boolean | "indeterminate"`, description: "Controlled checked state." },
  { name: "onCheckedChange", type: "(checked: boolean | 'indeterminate') => void", description: "Called when state changes." },
  { name: "defaultChecked", type: "boolean", default: "false", description: "Uncontrolled initial state." },
  { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
  { name: "required", type: "boolean", default: "false", description: "Marks field as required in a form." },
];

export function CheckboxDocs() {
  return (
    <div className="space-y-12">
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Checkbox</h1>
        <p className="text-muted-foreground">
          A control that allows the user to toggle between checked and not checked. Built on Radix UI
          Checkbox with indeterminate state support.
        </p>
      </div>

      <SectionBlock id="variants" title="Examples">
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="newsletter" defaultChecked />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="disabled-check" disabled />
                <Label htmlFor="disabled-check" className="opacity-50">Disabled option</Label>
              </div>
            </div>
          }
          code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
        />

        <StateShowcase
          items={[
            { label: "Unchecked", element: <Checkbox /> },
            { label: "Checked", element: <Checkbox defaultChecked /> },
            { label: "Disabled", element: <Checkbox disabled /> },
            { label: "Disabled Checked", element: <Checkbox disabled defaultChecked /> },
          ]}
          columns={4}
        />
      </SectionBlock>

      <SectionBlock id="props" title="Props">
        <PropsTable props={PROPS} />
      </SectionBlock>

      <SectionBlock id="accessibility" title="Accessibility">
        <div className="space-y-3 text-sm text-muted-foreground">
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Has <code className="font-mono text-xs text-primary">role="checkbox"</code></li>
            <li><kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">Space</kbd> toggles the checkbox when focused</li>
            <li>Supports <code className="font-mono text-xs text-primary">aria-checked="mixed"</code> for indeterminate state</li>
            <li>Always use with a <code className="font-mono text-xs text-primary">Label</code> component</li>
          </ul>
        </div>
      </SectionBlock>
    </div>
  );
}
