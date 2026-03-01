import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { StateShowcase } from "@/components/docs/StateShowcase";
import { SectionBlock } from "@/components/docs/SectionBlock";
import { cn } from "@/lib/utils";

const PROPS = [
  { name: "src", type: "string", description: "Image URL for AvatarImage." },
  { name: "alt", type: "string", description: "Alt text for the image." },
  { name: "className", type: "string", description: "Additional Tailwind classes for sizing/shape." },
  { name: "delayMs", type: "number", default: "600", description: "Delay before showing fallback (ms)." },
];

const SIZE_CLASSES: Record<string, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base",
  xl: "h-20 w-20 text-lg",
};

export function AvatarDocs() {
  return (
    <div className="space-y-12">
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Avatar</h1>
        <p className="text-muted-foreground">
          An image element with a fallback for when the image fails to load. Built on Radix UI Avatar
          with automatic fallback display.
        </p>
      </div>

      <SectionBlock id="variants" title="Examples">
        <ComponentPreview
          preview={
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/broken-image.jpg" alt="broken" />
                <AvatarFallback>AG</AvatarFallback>
              </Avatar>
              <Avatar className="h-14 w-14">
                <AvatarFallback className="text-base">XL</AvatarFallback>
              </Avatar>
            </div>
          }
          code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
  <AvatarFallback>SC</AvatarFallback>
</Avatar>

{/* Fallback when image fails */}
<Avatar>
  <AvatarFallback>AG</AvatarFallback>
</Avatar>`}
        />

        <StateShowcase
          items={Object.entries(SIZE_CLASSES).map(([size, cls]) => ({
            label: size,
            element: (
              <Avatar className={cn(cls)}>
                <AvatarFallback>{size.toUpperCase()}</AvatarFallback>
              </Avatar>
            ),
          }))}
          columns={4}
        />
      </SectionBlock>

      <SectionBlock id="props" title="Props">
        <PropsTable props={PROPS} />
      </SectionBlock>
    </div>
  );
}
