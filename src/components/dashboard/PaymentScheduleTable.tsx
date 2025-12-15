import { Table, THead, TRow, TH, TD } from "@/components/ui/Table";
import { formatUsd } from "@/lib/format";

export function PaymentScheduleTable({
  rows
}: {
  rows: Array<{ dueDate: string; amount: number; status: string }>;
}) {
  return (
    <Table>
      <THead>
        <tr>
          <TH>Due date</TH>
          <TH>Amount</TH>
          <TH>Status</TH>
        </tr>
      </THead>
      <tbody>
        {rows.map((r) => (
          <TRow key={r.dueDate + r.amount}>
            <TD className="text-fg">{new Date(r.dueDate).toLocaleDateString()}</TD>
            <TD className="text-fg">{formatUsd(r.amount)}</TD>
            <TD>{r.status}</TD>
          </TRow>
        ))}
      </tbody>
    </Table>
  );
}

