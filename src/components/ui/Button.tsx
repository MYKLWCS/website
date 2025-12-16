import Link from "next/link";
import { cloneElement, isValidElement, type ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "tertiary" | "danger";
type Size = "sm" | "md" | "lg";

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-brand to-brand/90 text-white shadow-[0_10px_30px_rgb(var(--brand)/0.3),0_4px_12px_rgb(0,0,0/0.08)] hover:shadow-[0_14px_40px_rgb(var(--brand)/0.4),0_6px_16px_rgb(0,0,0/0.12)] border border-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-250",
  secondary: "bg-white hover:bg-panel text-fg border border-border hover:border-brand/40 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-250",
  tertiary: "bg-transparent hover:bg-panel/80 text-fg border border-transparent hover:border-border transition-all duration-250",
  danger: "bg-gradient-to-br from-danger to-danger/90 text-white border border-white/20 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-250"
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm font-semibold",
  lg: "h-14 px-8 text-base font-semibold"
};

export function Button({ variant = "primary", size = "md", className, asChild, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

  const merged = cn(base, styles[variant], sizes[size], className);

  if (asChild) {
    const child = props.children;
    if (!isValidElement(child)) throw new Error("Button `asChild` expects a single React element child.");
    return cloneElement(child, { className: cn((child.props as any).className, merged) });
  }

  return <button className={merged} {...props} />;
}

export function ButtonLink(props: ComponentProps<typeof Link> & { variant?: Variant; size?: Size }) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";
  return <Link className={cn(base, styles[variant], sizes[size], className)} {...rest} />;
}
