"use client";

import { useState } from "react";

export interface NanoBananaImageProps {
  prompt: string;
  alt: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
  className?: string;
  label?: string;
}

const aspectRatioClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]"
};

export function NanoBananaImage({
  prompt,
  alt,
  aspectRatio = "video",
  className = "",
  label
}: NanoBananaImageProps) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl ${aspectRatioClasses[aspectRatio]} ${className}`}>
      {/* Gradient placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="mb-3 rounded-xl bg-white/80 p-3 shadow-lg backdrop-blur-sm dark:bg-black/60">
          <svg
            className="h-8 w-8 text-brand"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {label || "Image Placeholder"}
        </p>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Generate with Nano Banana</p>
      </div>

      {/* Hover overlay with prompt */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/90 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="w-full text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.7-6.3 4.7 2.3-7-6-4.6h7.6z" />
            </svg>
            <span className="text-sm font-semibold text-white">Nano Banana Prompt</span>
          </div>
          <p className="mb-4 max-h-32 overflow-y-auto text-xs text-gray-300">{prompt}</p>
          <button
            onClick={copyPrompt}
            className="rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand/90"
          >
            {copied ? "✓ Copied!" : "Copy Prompt"}
          </button>
        </div>
      </div>

      {/* Alt text for accessibility */}
      <span className="sr-only">{alt}</span>
    </div>
  );
}

// Pre-configured variants for common image types
export function HeroImage({ prompt, alt, className }: Omit<NanoBananaImageProps, "aspectRatio" | "label">) {
  return (
    <NanoBananaImage
      prompt={prompt}
      alt={alt}
      aspectRatio="video"
      label="Hero Image"
      className={className}
    />
  );
}

export function TestimonialImage({ prompt, alt, className }: Omit<NanoBananaImageProps, "aspectRatio" | "label">) {
  return (
    <NanoBananaImage
      prompt={prompt}
      alt={alt}
      aspectRatio="square"
      label="Customer Photo"
      className={className}
    />
  );
}

export function TeamMemberImage({ prompt, alt, className }: Omit<NanoBananaImageProps, "aspectRatio" | "label">) {
  return (
    <NanoBananaImage
      prompt={prompt}
      alt={alt}
      aspectRatio="square"
      label="Team Member"
      className={className}
    />
  );
}

export function InfographicImage({ prompt, alt, className }: Omit<NanoBananaImageProps, "aspectRatio" | "label">) {
  return (
    <NanoBananaImage
      prompt={prompt}
      alt={alt}
      aspectRatio="video"
      label="Infographic"
      className={className}
    />
  );
}
