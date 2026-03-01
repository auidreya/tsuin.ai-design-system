import { useState } from "react";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { SectionBlock } from "@/components/docs/SectionBlock";

const PROPS = [
  { name: "open", type: "boolean", description: "Controlled open state." },
  { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when open state changes." },
  { name: "defaultOpen", type: "boolean", default: "false", description: "Uncontrolled initial open state." },
];

export function DialogDocs() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-12">
      <div id="overview" className="scroll-mt-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Dialog</h1>
        <p className="text-muted-foreground">
          A modal dialog built on Radix UI Dialog. Supports controlled and uncontrolled modes,
          focus trapping, and scroll locking.
        </p>
      </div>

      <SectionBlock id="variants" title="Examples">
        <ComponentPreview
          preview={
            <div className="flex gap-3 flex-wrap justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Antigravity User" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@antigravity" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="destructive">Delete Item</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete your data.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="destructive" onClick={() => setOpen(false)}>Delete</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          }
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <Label htmlFor="name">Name</Label>
      <Input id="name" defaultValue="Antigravity User" />
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        />
      </SectionBlock>

      <SectionBlock id="props" title="Props">
        <PropsTable props={PROPS} />
      </SectionBlock>

      <SectionBlock id="accessibility" title="Accessibility">
        <div className="space-y-3 text-sm text-muted-foreground">
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Focus is trapped inside the dialog when open</li>
            <li>Pressing <kbd className="font-mono text-xs border border-border px-1.5 py-0.5 rounded">Esc</kbd> closes the dialog</li>
            <li>Scroll is locked on the page body when the dialog is open</li>
            <li><code className="font-mono text-xs text-primary">DialogTitle</code> and <code className="font-mono text-xs text-primary">DialogDescription</code> are required for screen reader announcements</li>
          </ul>
        </div>
      </SectionBlock>
    </div>
  );
}
