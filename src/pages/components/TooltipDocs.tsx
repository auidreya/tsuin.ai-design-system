import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { StateShowcase } from "@/components/docs/StateShowcase";
import { SectionBlock } from "@/components/docs/SectionBlock";

const PROPS = [
  { name: "content", type: "ReactNode", description: "Content displayed in the TooltipContent.", required: true },
  { name: "delayDuration", type: "number", default: "700", description: "Delay in ms before showing the tooltip." },
  { name: "side", type: `"top" | "right" | "bottom" | "left"`, default: '"top"', description: "Preferred side for the tooltip." },
  { name: "sideOffset", type: "number", default: "4", description: "Distance in px from the trigger." },
];

export function TooltipDocs() {
  return (
    <div className="space-y-12">
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Tooltip</h1>
        <p className="text-muted-foreground">
          A popup that displays information related to an element when the element receives keyboard focus
          or the mouse hovers over it. Built on Radix UI Tooltip.
        </p>
      </div>

      <SectionBlock id="variants" title="Positions">
        <ComponentPreview
          preview={
            <div className="flex gap-4 flex-wrap justify-center">
              {(["top", "right", "bottom", "left"] as const).map((side) => (
                <Tooltip key={side}>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm">{side}</Button>
                  </TooltipTrigger>
                  <TooltipContent side={side}>
                    Tooltip on {side}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          }
          code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    Tooltip content here
  </TooltipContent>
</Tooltip>`}
        />

        <StateShowcase
          items={[
            { label: "Top", element: <Tooltip><TooltipTrigger asChild><Button variant="outline" size="sm">Top</Button></TooltipTrigger><TooltipContent side="top">Top tooltip</TooltipContent></Tooltip> },
            { label: "Right", element: <Tooltip><TooltipTrigger asChild><Button variant="outline" size="sm">Right</Button></TooltipTrigger><TooltipContent side="right">Right tooltip</TooltipContent></Tooltip> },
            { label: "Bottom", element: <Tooltip><TooltipTrigger asChild><Button variant="outline" size="sm">Bottom</Button></TooltipTrigger><TooltipContent side="bottom">Bottom tooltip</TooltipContent></Tooltip> },
            { label: "Left", element: <Tooltip><TooltipTrigger asChild><Button variant="outline" size="sm">Left</Button></TooltipTrigger><TooltipContent side="left">Left tooltip</TooltipContent></Tooltip> },
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
            <li>Tooltip appears on hover and keyboard focus</li>
            <li><kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">Esc</kbd> dismisses the tooltip</li>
            <li>Do not put interactive content inside a tooltip — use a dialog instead</li>
            <li>Tooltip is announced by screen readers via <code className="font-mono text-xs text-primary">aria-describedby</code></li>
          </ul>
        </div>
      </SectionBlock>
    </div>
  );
}
