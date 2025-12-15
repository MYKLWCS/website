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
    "bg-brand text-white shadow-md hover:shadow-lg border border-brand/20 hover:bg-brand/90 button-clean",
  secondary: "bg-white hover:bg-panel text-fg border border-border hover:border-border/80 shadow-sm button-clean",
  tertiary: "bg-transparent hover:bg-panel/50 text-fg border border-transparent hover:border-border/40 button-clean",
  danger: "bg-danger text-white hover:bg-danger/90 border border-danger/20 shadow-sm button-clean"
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base"
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
