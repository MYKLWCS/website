import { forwardRef } from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, className = "", children, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-fg">
            {label}
            {props.required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={`
            h-10 w-full rounded-lg border px-3 py-2 text-sm transition-all
            ${
              error
                ? "border-red-500/60 bg-red-500/5 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-border/70 bg-bg/50 focus:border-brand/60 focus:ring-2 focus:ring-brand/20"
            }
            text-fg placeholder-muted
            disabled:cursor-not-allowed disabled:opacity-50
            ${className}
          `}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
          {...props}
        >
          {children}
        </select>
        {error && (
          <p id={`${props.id}-error`} className="mt-1.5 text-xs text-red-500" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${props.id}-helper`} className="mt-1.5 text-xs text-muted">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
