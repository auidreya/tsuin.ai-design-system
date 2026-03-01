import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel,
} from "@/components/ui/select";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { SectionBlock } from "@/components/docs/SectionBlock";

const PROPS = [
  { name: "value", type: "string", description: "Controlled selected value." },
  { name: "onValueChange", type: "(value: string) => void", description: "Called when selection changes." },
  { name: "defaultValue", type: "string", description: "Uncontrolled default value." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the select trigger." },
  { name: "placeholder", type: "string", description: "Placeholder shown when no value is selected." },
];

export function SelectDocs() {
  return (
    <div className="space-y-12">
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Select</h1>
        <p className="text-muted-foreground">
          A dropdown select built on Radix UI Select. Supports keyboard navigation, grouped options,
          and custom labels.
        </p>
      </div>

      <SectionBlock id="variants" title="Examples">
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Light themes</SelectLabel>
                    <SelectItem value="solarized">Solarized Teal</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Dark themes</SelectLabel>
                    <SelectItem value="tokyo">Tokyo Night Storm</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select disabled>
                <SelectTrigger>
                  <SelectValue placeholder="Disabled select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="x">Item</SelectItem>
                </SelectContent>
              </Select>
            </div>
          }
          code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>`}
        />
      </SectionBlock>

      <SectionBlock id="props" title="Props">
        <PropsTable props={PROPS} />
      </SectionBlock>

      <SectionBlock id="accessibility" title="Accessibility">
        <div className="space-y-3 text-sm text-muted-foreground">
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">↑↓</kbd> — navigate options</li>
            <li><kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">Enter</kbd> / <kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">Space</kbd> — open/select</li>
            <li><kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">Esc</kbd> — close without selecting</li>
          </ul>
        </div>
      </SectionBlock>
    </div>
  );
}
