import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  preview: React.ReactNode;
  code: string;
  className?: string;
}

export function ComponentPreview({ preview, code, className }: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tabs defaultValue="preview" className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-2">
        <TabsList className="h-8">
          <TabsTrigger value="preview" className="text-xs h-6 px-3">Preview</TabsTrigger>
          <TabsTrigger value="code" className="text-xs h-6 px-3">Code</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="preview">
        <div className="rounded-lg border border-border bg-background p-8 flex items-center justify-center min-h-32">
          {preview}
        </div>
      </TabsContent>

      <TabsContent value="code">
        <div className="relative rounded-lg border border-border bg-[#1a1b26] overflow-hidden">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white/70 hover:text-white"
            aria-label="Copy code"
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
          </button>
          <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
            <code className="text-[#a9b1d6] font-mono whitespace-pre">{code}</code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  );
}
