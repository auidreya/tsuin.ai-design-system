import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { SectionBlock } from "@/components/docs/SectionBlock";

const PROPS = [
  { name: "defaultValue", type: "string", description: "The value of the tab to select by default." },
  { name: "value", type: "string", description: "Controlled selected tab value." },
  { name: "onValueChange", type: "(value: string) => void", description: "Called when active tab changes." },
  { name: "orientation", type: `"horizontal" | "vertical"`, default: '"horizontal"', description: "Orientation of the tab list." },
];

export function TabsDocs() {
  return (
    <div className="space-y-12">
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Tabs</h1>
        <p className="text-muted-foreground">
          A set of layered sections of content — known as tab panels — that are displayed one at a time.
          Built on Radix UI Tabs.
        </p>
      </div>

      <SectionBlock id="variants" title="Examples">
        <ComponentPreview
          preview={
            <Tabs defaultValue="account" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>Make changes to your account here.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Antigravity User" />
                    </div>
                    <Button>Save changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password here.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <Button>Save password</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          }
          code={`<Tabs defaultValue="account">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account content here...
  </TabsContent>
  <TabsContent value="password">
    Password content here...
  </TabsContent>
</Tabs>`}
        />
      </SectionBlock>

      <SectionBlock id="props" title="Props">
        <PropsTable props={PROPS} />
      </SectionBlock>

      <SectionBlock id="accessibility" title="Accessibility">
        <div className="space-y-3 text-sm text-muted-foreground">
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">←→</kbd> — switch between tabs</li>
            <li><kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">Tab</kbd> — move focus into tab panel content</li>
            <li>Inactive tab panels are hidden from the accessibility tree</li>
          </ul>
        </div>
      </SectionBlock>
    </div>
  );
}
