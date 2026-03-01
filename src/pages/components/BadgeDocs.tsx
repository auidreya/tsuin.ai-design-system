import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { StateShowcase } from "@/components/docs/StateShowcase";
import { SectionBlock } from "@/components/docs/SectionBlock";

const PROPS = [
  { name: "variant", type: `"default" | "secondary" | "destructive" | "outline" | "success" | "warning"`, default: '"default"', description: "Visual style of the badge." },
  { name: "className", type: "string", description: "Additional Tailwind classes." },
];

export function BadgeDocs() {
  return (
    <div className="space-y-12">
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Badge</h1>
        <p className="text-muted-foreground">
          Small inline label for status, category, or version indicators. Supports semantic variants
          including success and warning states.
        </p>
      </div>

      <SectionBlock id="variants" title="Variants">
        <ComponentPreview
          preview={
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
            </div>
          }
          code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>`}
        />

        <StateShowcase
          items={[
            { label: "Default", element: <Badge>Default</Badge> },
            { label: "Secondary", element: <Badge variant="secondary">Secondary</Badge> },
            { label: "Outline", element: <Badge variant="outline">Outline</Badge> },
            { label: "Destructive", element: <Badge variant="destructive">Error</Badge> },
            { label: "Success", element: <Badge variant="success">Success</Badge> },
            { label: "Warning", element: <Badge variant="warning">Warning</Badge> },
          ]}
          columns={3}
        />
      </SectionBlock>

      <SectionBlock id="props" title="Props">
        <PropsTable props={PROPS} />
      </SectionBlock>
    </div>
  );
}
