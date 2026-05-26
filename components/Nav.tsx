"use client";

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
        <div className="flex items-center gap-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <circle cx="18" cy="18" r="17" stroke="#1B3A6B" strokeWidth="1.5" />
            <path
              d="M18 9L26 27H10L18 9Z"
              fill="#1B3A6B"
              opacity="0.15"
            />
            <path
              d="M18 9L26 27M18 9L10 27M13 21H23"
              stroke="#1B3A6B"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <div
              className="font-sans font-medium text-navy text-sm"
              style={{ letterSpacing: "0.12em" }}
            >
              AUDAX VENTURES
            </div>
            <div className="font-sans text-slate text-xs hidden sm:block" style={{ letterSpacing: "0.04em" }}>
              Founder Prototype Program
            </div>
          </div>
        </div>

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
