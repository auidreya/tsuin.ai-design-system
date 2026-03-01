import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDef[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="rounded-md border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/40">
            <TableHead className="w-36 font-semibold text-foreground">Name</TableHead>
            <TableHead className="w-48 font-semibold text-foreground">Type</TableHead>
            <TableHead className="w-28 font-semibold text-foreground">Default</TableHead>
            <TableHead className="font-semibold text-foreground">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell>
                <code className="font-mono text-xs text-primary">
                  {prop.name}
                  {prop.required && <span className="text-destructive ml-0.5">*</span>}
                </code>
              </TableCell>
              <TableCell>
                <code className="font-mono text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                  {prop.type}
                </code>
              </TableCell>
              <TableCell>
                {prop.default ? (
                  <code className="font-mono text-xs text-muted-foreground">{prop.default}</code>
                ) : (
                  <span className="text-muted-foreground/40 text-xs">—</span>
                )}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
