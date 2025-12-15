"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/cn";

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  disabled?: boolean;
  label?: string;
  description?: string;
  className?: string;
}

export function FileUpload({
  onFilesSelected,
  accept = "*",
  multiple = false,
  maxSize = 10 * 1024 * 1024, // 10MB default
  disabled = false,
  label = "Upload files",
  description,
  className,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const validateFiles = useCallback(
    (filesToValidate: File[]) => {
      setError(null);

      for (const file of filesToValidate) {
        if (file.size > maxSize) {
          setError(`File "${file.name}" is too large. Maximum size is ${(maxSize / 1024 / 1024).toFixed(1)}MB.`);
          return false;
        }
      }

      return true;
    },
    [maxSize]
  );

  const handleFiles = useCallback(
    (filesToHandle: File[]) => {
      if (!validateFiles(filesToHandle)) return;

      if (!multiple && filesToHandle.length > 0) {
        setFiles([filesToHandle[0]]);
        onFilesSelected([filesToHandle[0]]);
      } else if (multiple) {
        const allFiles = multiple ? filesToHandle : [filesToHandle[0]];
        setFiles(allFiles);
        onFilesSelected(allFiles);
      }
    },
    [multiple, validateFiles, onFilesSelected]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        handleFiles(Array.from(e.target.files));
      }
    },
    [handleFiles]
  );

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);

      if (e.dataTransfer.files) {
        handleFiles(Array.from(e.dataTransfer.files));
      }
    },
    [handleFiles]
  );

  const removeFile = useCallback(
    (index: number) => {
      const newFiles = files.filter((_, i) => i !== index);
      setFiles(newFiles);
      onFilesSelected(newFiles);
    },
    [files, onFilesSelected]
  );

  const handleClick = useCallback(() => {
    if (!disabled) {
      inputRef.current?.click();
    }
  }, [disabled]);

  return (
    <div className={cn("space-y-3", className)}>
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
        className={cn(
          "relative cursor-pointer rounded-2xl border-2 border-dashed p-6 transition-all",
          isDragActive
            ? "border-brand bg-brand/5"
            : "border-border/40 bg-bg/25 hover:border-border/60 hover:bg-bg/35",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          onChange={handleChange}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          className="hidden"
        />

        <div className="text-center">
          <div className="mx-auto mb-3 h-10 w-10 rounded-xl border border-border/60 bg-panel flex items-center justify-center">
            <svg
              className="h-5 w-5 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
              />
            </svg>
          </div>
          <p className="text-sm font-medium">{label}</p>
          {description && <p className="mt-1 text-xs text-muted">{description}</p>}
          <p className="mt-2 text-xs text-muted">
            {accept === "*" ? "Any file type" : accept} • Max {(maxSize / 1024 / 1024).toFixed(1)}MB
          </p>
        </div>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200/50 bg-red-50/50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted">
            {files.length} file{files.length !== 1 ? "s" : ""} selected
          </p>
          <div className="space-y-1">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between rounded-lg border border-border/40 bg-panel/40 px-3 py-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <svg
                    className="h-4 w-4 text-muted flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0015.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-muted">
                      {(file.size / 1024).toFixed(1)}KB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded hover:bg-red-500/10 text-red-600 hover:text-red-700 transition-colors flex-shrink-0"
                  aria-label="Remove file"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Multiple file upload with preview
 */
interface MultiFileUploadProps extends Omit<FileUploadProps, "multiple"> {
  onFilesSelected: (files: File[]) => void;
}

export function MultiFileUpload(props: MultiFileUploadProps) {
  return <FileUpload {...props} multiple={true} />;
}
