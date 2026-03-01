import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { StateShowcase } from "@/components/docs/StateShowcase";
import { SectionBlock } from "@/components/docs/SectionBlock";

const PROPS = [
  { name: "checked", type: "boolean", description: "Controlled checked state." },
  { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Called when state changes." },
  { name: "defaultChecked", type: "boolean", default: "false", description: "Uncontrolled initial state." },
  { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
];

export function SwitchDocs() {
  const [on, setOn] = useState(false);

  return (
    <div className="space-y-12">
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Switch</h1>
        <p className="text-muted-foreground">
          A toggle switch control for boolean settings. Built on Radix UI Switch with animated thumb
          and full keyboard support.
        </p>
      </div>

      <SectionBlock id="variants" title="Examples">
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch id="dark-mode" checked={on} onCheckedChange={setOn} />
                <Label htmlFor="dark-mode">Dark mode: {on ? "On" : "Off"}</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch id="disabled" disabled />
                <Label htmlFor="disabled" className="opacity-50">Disabled switch</Label>
              </div>
            </div>
          }
          code={`<div className="flex items-center gap-3">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`}
        />

        <StateShowcase
          items={[
            { label: "Off", element: <Switch /> },
            { label: "On", element: <Switch defaultChecked /> },
            { label: "Disabled Off", element: <Switch disabled /> },
            { label: "Disabled On", element: <Switch disabled defaultChecked /> },
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
            <li>Has <code className="font-mono text-xs text-primary">role="switch"</code> with <code className="font-mono text-xs text-primary">aria-checked</code></li>
            <li><kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">Space</kbd> toggles the switch when focused</li>
            <li>Always pair with a visible <code className="font-mono text-xs text-primary">Label</code></li>
          </ul>
        </div>
      </SectionBlock>
    </div>
  );
}
