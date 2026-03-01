import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { SectionBlock } from "@/components/docs/SectionBlock";
import { Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const PROPS = [
  { name: "variant", type: `"default" | "destructive" | "success" | "warning" | "info"`, default: '"default"', description: "Visual intent of the alert." },
  { name: "className", type: "string", description: "Additional Tailwind classes." },
];

export function AlertDocs() {
  return (
    <div className="space-y-12">
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Alert</h1>
        <p className="text-muted-foreground">
          Displays a callout for important information. Supports default, info, success, warning,
          and destructive variants with optional icon support.
        </p>
      </div>

      <SectionBlock id="variants" title="Variants">
        <ComponentPreview
          preview={
            <div className="flex flex-col gap-3 w-full max-w-lg">
              <Alert>
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>This is a default informational message.</AlertDescription>
              </Alert>
              <Alert variant="info">
                <Info className="h-4 w-4" />
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>Something you should know about this feature.</AlertDescription>
              </Alert>
              <Alert variant="success">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Your changes have been saved successfully.</AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>This action cannot be easily undone.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong. Please try again.</AlertDescription>
              </Alert>
            </div>
          }
          code={`<Alert variant="info">
  <Info className="h-4 w-4" />
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>Something you should know.</AlertDescription>
</Alert>

<Alert variant="success">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes were saved.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <XCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>`}
        />
      </SectionBlock>

      <SectionBlock id="props" title="Props">
        <PropsTable props={PROPS} />
      </SectionBlock>

      <SectionBlock id="accessibility" title="Accessibility">
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>The Alert component uses <code className="font-mono text-xs text-primary">role="alert"</code>, which causes assistive technologies to announce the content immediately.</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>For non-urgent messages, consider <code className="font-mono text-xs text-primary">role="status"</code> instead</li>
            <li>Icons are decorative — they do not need alt text</li>
            <li>AlertTitle creates an accessible heading for the alert message</li>
          </ul>
        </div>
      </SectionBlock>
    </div>
  );
}
