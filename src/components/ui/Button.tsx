import Link from "next/link";
import { cloneElement, isValidElement, type ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "tertiary" | "danger" | "neon" | "outline";
type Size = "sm" | "md" | "lg" | "xl";

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-brand to-brand/85 text-white shadow-[0_12px_35px_rgb(var(--brand)/0.4),0_5px_15px_rgb(0,0,0/0.1),inset_0_1px_0_rgb(255,255,255/0.3)] hover:shadow-[0_18px_45px_rgb(var(--brand)/0.5),0_8px_20px_rgb(0,0,0/0.15)] border border-brand/80 hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-100 transition-all duration-300 font-extrabold",
  secondary: "bg-white hover:bg-panel text-fg border-2 border-border hover:border-brand/50 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 font-semibold",
  tertiary: "bg-transparent hover:bg-panel/80 text-fg border border-transparent hover:border-border/50 transition-all duration-200",
  danger: "bg-gradient-to-br from-danger to-danger/90 text-white border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 font-bold",
  neon: "bg-primary text-black font-bold shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 border border-primary",
  outline: "bg-transparent border border-white/20 text-white hover:border-primary hover:text-primary hover:bg-white/5 transition-all duration-300"
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs uppercase tracking-wide",
  md: "h-12 px-6 text-sm font-semibold",
  lg: "h-14 px-8 text-base font-semibold",
  xl: "h-16 px-10 text-lg font-bold"
};

export function Button({ variant = "primary", size = "md", className, asChild, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

  const merged = cn(base, styles[variant], sizes[size], className);

  if (asChild) {
    const child = props.children;
    if (!isValidElement(child)) throw new Error("Button `asChild` expects a single React element child.");
    return cloneElement(child, { className: cn((child.props as any).className, merged) } as any);
  }

  return <button className={merged} {...props} />;
}

export function ButtonLink(props: ComponentProps<typeof Link> & { variant?: Variant; size?: Size }) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";
  return <Link className={cn(base, styles[variant], sizes[size], className)} {...rest} />;
}
