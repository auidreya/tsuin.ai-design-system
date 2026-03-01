import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { SectionBlock } from "@/components/docs/SectionBlock";

const PROPS = [
  { name: "className", type: "string", description: "Additional Tailwind classes applied to the card wrapper." },
];

export function CardDocs() {
  return (
    <div className="space-y-12">
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Card</h1>
        <p className="text-muted-foreground">
          A container component for grouping related content. Composed of Card, CardHeader, CardTitle,
          CardDescription, CardContent, and CardFooter sub-components.
        </p>
      </div>

      <SectionBlock id="variants" title="Examples">
        <ComponentPreview
          preview={
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Antigravity Component</CardTitle>
                <CardDescription>A showcase of the Card component structure.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Card content goes here. Any element or component can be placed inside CardContent.</p>
              </CardContent>
              <CardFooter className="justify-between">
                <Badge variant="secondary">v0.1</Badge>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>
          }
          code={`<Card>
  <CardHeader>
    <CardTitle>Antigravity Component</CardTitle>
    <CardDescription>A showcase of the Card component.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter className="justify-between">
    <Badge variant="secondary">v0.1</Badge>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Simple Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Minimal card with header and content only.</p>
            </CardContent>
          </Card>
          <Card className="border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-base text-primary">Highlighted Card</CardTitle>
              <CardDescription>Custom border and background tint.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Use className to apply custom styling.</p>
            </CardContent>
          </Card>
        </div>
      </SectionBlock>

      <SectionBlock id="props" title="Props">
        <p className="text-sm text-muted-foreground mb-3">All sub-components accept standard HTML div/heading attributes plus className.</p>
        <PropsTable props={PROPS} />
      </SectionBlock>
    </div>
  );
}
