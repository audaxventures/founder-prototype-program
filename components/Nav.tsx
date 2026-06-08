"use client";

import Image from "next/image";
import { openCalendlyModal } from "./CalendlyModal";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "0.5px solid rgba(27,58,107,0.12)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
      }}
    >
      <div className="relative max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="https://www.audaxventures.ca" target="_blank" rel="noopener noreferrer">
          <Image
            src="/logo.png"
            alt="Audax Ventures"
            height={60}
            width={200}
            className="flex-shrink-0"
            style={{ objectFit: "contain" }}
          />
        </a>

        {/* Centre title */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block pointer-events-none">
          <span
            className="font-sans font-medium text-navy"
            style={{ fontSize: "16px", letterSpacing: "0.08em" }}
          >
            Founder Prototype Program
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={openCalendlyModal}
          className="font-sans font-medium text-sm px-5 py-2.5 transition-opacity hover:opacity-90"
          style={{ borderRadius: "2px", backgroundColor: "#C9A84C", color: "#1B3A6B", border: "none", cursor: "pointer" }}
        >
          Book a FREE Strategy Call
        </button>
      </div>
    </nav>
  );
}
