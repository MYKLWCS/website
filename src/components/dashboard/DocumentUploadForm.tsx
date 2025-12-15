"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/hooks/useToast";

interface DocumentUploadFormProps {
}

export function DocumentUploadForm({}: DocumentUploadFormProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("identity");
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  const categories = [
    { id: "identity", label: "Identity Documents", icon: "🆔" },
    { id: "vehicle", label: "Vehicle Documents", icon: "🚗" },
    { id: "income", label: "Income Verification", icon: "💼" },
    { id: "agreements", label: "Agreements & Receipts", icon: "📋" }
  ];

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    const validFiles = newFiles.filter((file) => {
      const validTypes = ["application/pdf", "image/jpeg", "image/png", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!validTypes.includes(file.type)) {
        showToast({ title: `${file.name} has unsupported format`, tone: "warn" });
        return false;
      }
      if (file.size > 10 * 1024 * 1024) {
        showToast({ title: `${file.name} exceeds 10MB limit`, tone: "warn" });
        return false;
      }
      return true;
    });
    setFiles((prev) => [...prev, ...validFiles]);
  }, [showToast]);

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      showToast({ title: "Select at least one file to upload", tone: "warn" });
      return;
    }

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("category", selectedCategory);
      files.forEach((file) => formData.append("files", file));

      const response = await fetch("/api/documents/upload", {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Upload failed");

      showToast({ title: "Documents uploaded successfully", tone: "ok" });
      setFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
      router.refresh();
    } catch (error) {
      showToast({
        title: "Failed to upload documents",
        description: error instanceof Error ? error.message : "Please try again",
        tone: "warn"
      });
    } finally {
      setIsUploading(false);
    }
  };

  const getCategoryEmoji = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    return category?.icon || "📄";
  };

  return (
    <Card className="p-6">
      <h2 className="text-sm font-semibold tracking-tight">Upload Documents</h2>
      <p className="mt-1 text-sm text-muted">
        Select a document category, then drag and drop files or click to browse
      </p>

      {/* Category Selection */}
      <div className="mt-4">
        <Label>Document Category</Label>
        <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-lg border-2 px-3 py-3 text-left transition-all ${
                selectedCategory === category.id
                  ? "border-brand bg-brand/10 text-fg"
                  : "border-border/40 bg-bg/25 text-muted hover:border-border/60"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <p className="mt-1 text-xs font-medium">{category.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* File Upload Area */}
      <div className="mt-6">
        <div
          className="rounded-lg border-2 border-dashed border-border/40 bg-bg/25 p-8 text-center transition-all hover:border-brand/50 hover:bg-bg/40"
          onDragOver={(e) => {
            e.preventDefault();
            e.currentTarget.classList.add("border-brand", "bg-brand/5");
          }}
          onDragLeave={(e) => {
            e.currentTarget.classList.remove("border-brand", "bg-brand/5");
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("border-brand", "bg-brand/5");
            const droppedFiles = Array.from(e.dataTransfer.files);
            const syntheticEvent = {
              target: { files: droppedFiles }
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            handleFileSelect(syntheticEvent);
          }}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={handleFileSelect}
            accept=".pdf,.jpg,.jpeg,.png,.docx"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="mx-auto block text-center"
          >
            <span className="text-4xl">📤</span>
            <p className="mt-3 font-medium text-fg">
              Drag and drop files here, or <span className="text-brand underline">browse</span>
            </p>
            <p className="mt-1 text-xs text-muted">PDF, JPG, PNG, or DOCX up to 10MB each</p>
          </button>
        </div>
      </div>

      {/* Selected Files List */}
      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium">Selected Files ({files.length})</h3>
          <div className="mt-3 space-y-2">
            {files.map((file, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg border border-border/40 bg-bg/25 p-3">
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium text-fg">{file.name}</p>
                  <p className="mt-1 text-xs text-muted">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveFile(idx)}
                  className="ml-2 rounded p-2 hover:bg-danger/10 text-danger"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload Button */}
      <div className="mt-6 flex gap-2">
        <Button
          onClick={handleUpload}
          disabled={files.length === 0 || isUploading}
          className={isUploading ? "opacity-75" : ""}
        >
          {isUploading ? "Uploading..." : `Upload ${files.length > 0 ? `(${files.length})` : ""}`}
        </Button>
        {files.length > 0 && (
          <Button
            variant="secondary"
            onClick={() => {
              setFiles([]);
              if (fileInputRef.current) fileInputRef.current.value = "";
            }}
            disabled={isUploading}
          >
            Clear
          </Button>
        )}
      </div>

      <p className="mt-4 text-xs text-muted">
        Your documents are securely stored and encrypted. We'll notify you when review is complete.
      </p>
    </Card>
  );
}
