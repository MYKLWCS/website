"use client";

import { ReactNode, useEffect, useRef, useCallback, useState } from "react";
import { cn } from "@/lib/cn";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  actions?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  closeButton?: boolean;
  backdrop?: boolean;
  className?: string;
}

const sizes = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  actions,
  size = "md",
  closeButton = true,
  backdrop = true,
  className,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === e.currentTarget && backdrop) {
        handleClose();
      }
    },
    [backdrop, handleClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDialogElement>) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "fixed inset-0 z-50 rounded-2xl border border-border/60 bg-bg shadow-2xl backdrop:bg-black/40",
        "p-6 max-h-[90vh] overflow-y-auto",
        sizes[size],
        className
      )}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            {title && <h2 className="text-lg font-semibold tracking-tight">{title}</h2>}
            {description && <p className="mt-1 text-sm text-muted">{description}</p>}
          </div>
          {closeButton && (
            <button
              onClick={handleClose}
              className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-bg hover:bg-panel transition-colors"
              aria-label="Close modal"
            >
              <span className="text-lg">×</span>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="py-4">{children}</div>

        {/* Actions */}
        {actions && <div className="flex flex-wrap gap-3 pt-4 border-t border-border/40">{actions}</div>}
      </div>
    </dialog>
  );
}

/**
 * Alert dialog variant
 */
interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: ReactNode;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  destructive?: boolean;
}

export function AlertDialog({
  open,
  onClose,
  title,
  description,
  children,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  destructive = false,
}: AlertDialogProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      description={description}
      size="sm"
      closeButton={false}
      actions={
        <div className="flex w-full gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-border/60 bg-panel px-4 py-2 text-sm font-medium hover:bg-panel/80 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={cn(
              "flex-1 rounded-xl px-4 py-2 text-sm font-medium text-white transition-colors",
              destructive ? "bg-danger hover:bg-danger/90" : "bg-brand hover:bg-brand/90"
            )}
          >
            {confirmText}
          </button>
        </div>
      }
    >
      {children}
    </Modal>
  );
}

/**
 * Confirmation dialog hook
 */
export function useAlertDialog() {
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState<Partial<AlertDialogProps>>({});

  const confirm = useCallback(
    (options: Partial<AlertDialogProps>) => {
      setConfig(options);
      setOpen(true);
      return new Promise((resolve) => {
        setConfig((prev) => ({
          ...prev,
          onConfirm: () => {
            options.onConfirm?.();
            resolve(true);
            setOpen(false);
          },
        }));
      });
    },
    []
  );

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  return { open, close, confirm, config };
}
