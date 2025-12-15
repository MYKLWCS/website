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
    "bg-gradient-to-r from-brand2 to-brand text-bg shadow-glow border border-white/10 hover:border-white/20",
  secondary: "bg-bg/40 hover:bg-bg/60 text-fg border border-border/14 hover:border-border/24",
  tertiary: "bg-transparent hover:bg-white/5 text-fg border border-border/10 hover:border-border/20",
  danger: "bg-danger/15 hover:bg-danger/22 text-fg border border-danger/25 hover:border-danger/35"
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
