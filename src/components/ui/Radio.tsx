import { forwardRef } from "react";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, helperText, className = "", ...props }, ref) => {
    return (
      <label className="flex cursor-pointer items-start gap-3">
        <input
          ref={ref}
          type="radio"
          className={`
            mt-0.5 h-4 w-4 cursor-pointer rounded-full border-2 border-border/70
            text-brand transition-all
            focus:ring-2 focus:ring-brand/20 focus:ring-offset-2
            disabled:cursor-not-allowed disabled:opacity-50
            ${className}
          `}
          {...props}
        />
        {label && (
          <div className="flex-1">
            <span className="text-sm font-medium text-fg">{label}</span>
            {helperText && <p className="mt-0.5 text-xs text-muted">{helperText}</p>}
          </div>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";

// Radio Group component for managing multiple radios
export function RadioGroup({
  label,
  error,
  children,
  className = ""
}: {
  label?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <fieldset className={className}>
      {label && <legend className="mb-3 text-sm font-medium text-fg">{label}</legend>}
      <div className="space-y-3">{children}</div>
      {error && (
        <p className="mt-2 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}
