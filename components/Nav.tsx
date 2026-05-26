"use client";

import Image from "next/image";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "0.5px solid rgba(27,58,107,0.12)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Audax Ventures"
          height={36}
          width={120}
          className="flex-shrink-0"
          style={{ objectFit: "contain" }}
        />

        {/* CTA */}
        <a
          href="#book"
          className="font-sans font-medium text-sm bg-navy text-white px-5 py-2.5 transition-colors hover:bg-navy-dark"
          style={{ borderRadius: "2px" }}
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}
