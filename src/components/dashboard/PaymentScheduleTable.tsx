import { Badge } from "@/components/ui/Badge";
import { Table, THead, TRow, TH, TD } from "@/components/ui/Table";
import { formatUsd } from "@/lib/format";

export type PaymentRow = {
  dueDate: string;
  amount: number;
  status: "paid" | "upcoming" | "overdue" | "scheduled";
};

type Props = {
  rows: PaymentRow[];
  showNextDueHighlight?: boolean;
  title?: string;
  compact?: boolean;
};

const STATUS_BADGE_VARIANT: Record<PaymentRow["status"], "default" | "brand" | "ok" | "warn"> = {
  paid: "ok",
  upcoming: "brand",
  overdue: "warn",
  scheduled: "default"
};

const STATUS_LABELS: Record<PaymentRow["status"], string> = {
  paid: "Paid",
  upcoming: "Due Soon",
  overdue: "Overdue",
  scheduled: "Scheduled"
};

export function PaymentScheduleTable({
  rows,
  showNextDueHighlight = false,
  title,
  compact = false
}: Props) {
  if (!rows || rows.length === 0) {
    return (
      <div className="rounded-lg border border-border/40 bg-bg/25 p-4 text-center">
        <p className="text-sm text-muted">No payments scheduled</p>
      </div>
    );
  }

  const nextUpcoming = rows.find((r) => r.status === "upcoming" || r.status === "scheduled");

  return (
    <div className="space-y-3">
      {showNextDueHighlight && nextUpcoming && (
        <div className="rounded-lg border border-brand/30 bg-brand/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Next Payment Due</p>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold text-fg">{formatUsd(nextUpcoming.amount)}</p>
              <p className="mt-1 text-sm text-muted">
                {new Date(nextUpcoming.dueDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
            </div>
            <Badge variant="brand">Due Soon</Badge>
          </div>
        </div>
      )}

      {title && <h3 className="text-sm font-semibold tracking-tight">{title}</h3>}

      <div className="overflow-x-auto">
        <Table>
          <THead>
            <tr>
              <TH>Due Date</TH>
              {!compact && <TH>Payment #</TH>}
              <TH>Amount</TH>
              <TH>Status</TH>
            </tr>
          </THead>
          <tbody>
            {rows.map((r, idx) => (
              <TRow
                key={r.dueDate + r.amount}
                className={
                  r.status === "upcoming" ? "bg-brand/5 hover:bg-brand/10" : undefined
                }
              >
                <TD className="font-medium text-fg">
                  {new Date(r.dueDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  })}
                </TD>
                {!compact && (
                  <TD className="text-sm text-muted">Payment {idx + 1}</TD>
                )}
                <TD className="font-semibold text-fg">{formatUsd(r.amount)}</TD>
                <TD>
                  <Badge variant={STATUS_BADGE_VARIANT[r.status]}>
                    {STATUS_LABELS[r.status]}
                  </Badge>
                </TD>
              </TRow>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Summary footer */}
      {rows.length > 0 && (
        <div className="rounded-lg border border-border/40 bg-bg/25 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Total Remaining Balance</span>
            <span className="text-lg font-bold text-fg">
              {formatUsd(rows.reduce((sum, r) => sum + r.amount, 0))}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
