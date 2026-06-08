"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export function openCalendlyModal() {
  window.dispatchEvent(new CustomEvent("open-calendly-modal"));
}

export default function CalendlyModal() {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    setLabel(new Date().toLocaleString("en-US", { month: "long", year: "numeric" }));
  }, []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-calendly-modal", handler);
    return () => window.removeEventListener("open-calendly-modal", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        backgroundColor: "rgba(0,0,0,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "white",
          maxWidth: "640px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          borderRadius: "4px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "12px",
            right: "16px",
            zIndex: 10,
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#1B3A6B",
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Header */}
        <div style={{ padding: "24px 24px 0" }}>
          {/* Trust bullets */}
          <div
            style={{
              backgroundColor: "#F4F6F9",
              borderRadius: "3px",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            {[
              "We'll listen to your idea — no NDA required",
              "We'll tell you honestly if the program is a good fit",
              "You'll leave with clarity, whether we work together or not",
            ].map((item, i, arr) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  marginBottom: i < arr.length - 1 ? "8px" : 0,
                }}
              >
                <span style={{ color: "#C45C2A", fontSize: "13px", flexShrink: 0, fontWeight: 500 }}>✓</span>
                <span style={{ fontSize: "13px", color: "#4A5568", lineHeight: "1.5" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Urgency line */}
          {label && (
            <div
              style={{
                marginBottom: "12px",
                textAlign: "center",
                fontSize: "12px",
                color: "rgba(27,58,107,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#C45C2A",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              We take on a limited number of projects each month — currently booking {label}.
            </div>
          )}
        </div>

        {/* Calendly widget */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/audax-ventures/audax-ventures-founder-prototype-program?hide_gdpr_banner=1&primary_color=1B3A6B"
          data-resize="true"
          style={{ minWidth: "280px", height: "700px" }}
        />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </div>
  );
}
