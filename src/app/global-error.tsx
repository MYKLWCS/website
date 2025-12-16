"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: "#ffffff"
        }}>
          <div style={{
            maxWidth: "600px",
            textAlign: "center"
          }}>
            <div style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "rgba(236, 72, 153, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 2rem"
            }}>
              <span style={{
                color: "#EC4899",
                fontSize: "48px",
                fontWeight: "bold"
              }}>!</span>
            </div>
            <h1 style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#111827"
            }}>
              Something went wrong
            </h1>
            <p style={{
              fontSize: "18px",
              color: "#6B7280",
              marginBottom: "2rem"
            }}>
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            <button
              onClick={reset}
              style={{
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#EC4899",
                color: "white",
                cursor: "pointer"
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
