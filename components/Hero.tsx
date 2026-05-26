"use client";

import FadeUp from "./FadeUp";

function DashboardMockup() {
  return (
    <svg
      viewBox="0 0 760 520"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto rounded-sm"
      style={{ boxShadow: "0 20px 60px rgba(27,58,107,0.18), 0 4px 16px rgba(27,58,107,0.1)" }}
    >
      {/* Window chrome */}
      <rect width="760" height="520" fill="#F4F6F9" rx="8" />
      <rect width="760" height="44" fill="#1B3A6B" rx="8" />
      <rect x="0" y="36" width="760" height="8" fill="#1B3A6B" />
      <circle cx="20" cy="22" r="6" fill="rgba(255,255,255,0.25)" />
      <circle cx="38" cy="22" r="6" fill="rgba(255,255,255,0.18)" />
      <circle cx="56" cy="22" r="6" fill="rgba(255,255,255,0.12)" />
      <rect x="80" y="14" width="120" height="16" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="620" y="14" width="60" height="16" rx="4" fill="rgba(255,255,255,0.1)" />
      <rect x="692" y="12" width="56" height="20" rx="4" fill="#C45C2A" />

      {/* Sidebar */}
      <rect x="0" y="44" width="160" height="476" fill="#1B3A6B" rx="0" />
      <rect x="0" y="476" width="160" height="44" fill="#1B3A6B" rx="0" />
      <rect x="12" y="64" width="136" height="28" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="22" y="72" width="70" height="10" rx="3" fill="rgba(255,255,255,0.7)" />
      <rect x="12" y="100" width="136" height="28" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="22" y="108" width="55" height="10" rx="3" fill="rgba(255,255,255,0.35)" />
      <rect x="12" y="136" width="136" height="28" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="22" y="144" width="80" height="10" rx="3" fill="rgba(255,255,255,0.35)" />
      <rect x="12" y="172" width="136" height="28" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="22" y="180" width="60" height="10" rx="3" fill="rgba(255,255,255,0.35)" />
      <rect x="12" y="208" width="136" height="28" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="22" y="216" width="72" height="10" rx="3" fill="rgba(255,255,255,0.35)" />

      {/* Main content area */}
      <rect x="160" y="44" width="600" height="476" fill="#F4F6F9" />

      {/* Page title */}
      <rect x="180" y="64" width="140" height="14" rx="3" fill="#1B3A6B" opacity="0.8" />
      <rect x="180" y="84" width="90" height="8" rx="3" fill="#1B3A6B" opacity="0.2" />

      {/* Metric cards row */}
      <rect x="180" y="108" width="168" height="80" rx="6" fill="white" style={{ filter: "drop-shadow(0 1px 4px rgba(27,58,107,0.08))" }} />
      <rect x="196" y="122" width="50" height="8" rx="3" fill="#1B3A6B" opacity="0.3" />
      <rect x="196" y="138" width="80" height="18" rx="3" fill="#1B3A6B" opacity="0.8" />
      <rect x="196" y="164" width="60" height="8" rx="3" fill="#C45C2A" opacity="0.6" />

      <rect x="364" y="108" width="168" height="80" rx="6" fill="white" style={{ filter: "drop-shadow(0 1px 4px rgba(27,58,107,0.08))" }} />
      <rect x="380" y="122" width="55" height="8" rx="3" fill="#1B3A6B" opacity="0.3" />
      <rect x="380" y="138" width="70" height="18" rx="3" fill="#1B3A6B" opacity="0.8" />
      <rect x="380" y="164" width="65" height="8" rx="3" fill="#22c55e" opacity="0.5" />

      <rect x="548" y="108" width="192" height="80" rx="6" fill="white" style={{ filter: "drop-shadow(0 1px 4px rgba(27,58,107,0.08))" }} />
      <rect x="564" y="122" width="60" height="8" rx="3" fill="#1B3A6B" opacity="0.3" />
      <rect x="564" y="138" width="75" height="18" rx="3" fill="#1B3A6B" opacity="0.8" />
      <rect x="564" y="164" width="55" height="8" rx="3" fill="#22c55e" opacity="0.5" />

      {/* Chart area */}
      <rect x="180" y="204" width="360" height="180" rx="6" fill="white" style={{ filter: "drop-shadow(0 1px 4px rgba(27,58,107,0.08))" }} />
      <rect x="196" y="218" width="80" height="10" rx="3" fill="#1B3A6B" opacity="0.6" />
      <rect x="196" y="234" width="50" height="7" rx="3" fill="#1B3A6B" opacity="0.2" />
      {/* Chart bars */}
      <rect x="204" y="310" width="24" height="50" rx="3" fill="#1B3A6B" opacity="0.15" />
      <rect x="238" y="290" width="24" height="70" rx="3" fill="#1B3A6B" opacity="0.25" />
      <rect x="272" y="275" width="24" height="85" rx="3" fill="#1B3A6B" opacity="0.35" />
      <rect x="306" y="258" width="24" height="102" rx="3" fill="#1B3A6B" opacity="0.5" />
      <rect x="340" y="270" width="24" height="90" rx="3" fill="#C45C2A" opacity="0.7" />
      <rect x="374" y="248" width="24" height="112" rx="3" fill="#1B3A6B" opacity="0.5" />
      <rect x="408" y="235" width="24" height="125" rx="3" fill="#1B3A6B" opacity="0.65" />
      <rect x="442" y="220" width="24" height="140" rx="3" fill="#1B3A6B" opacity="0.8" />
      {/* Chart baseline */}
      <rect x="196" y="360" width="328" height="1" fill="#1B3A6B" opacity="0.1" />

      {/* Right panel */}
      <rect x="556" y="204" width="184" height="180" rx="6" fill="white" style={{ filter: "drop-shadow(0 1px 4px rgba(27,58,107,0.08))" }} />
      <rect x="572" y="218" width="90" height="10" rx="3" fill="#1B3A6B" opacity="0.6" />
      {/* Donut chart placeholder */}
      <circle cx="648" cy="300" r="44" fill="none" stroke="#1B3A6B" strokeWidth="22" strokeOpacity="0.12" />
      <circle cx="648" cy="300" r="44" fill="none" stroke="#1B3A6B" strokeWidth="22" strokeOpacity="0.55" strokeDasharray="110 166" strokeDashoffset="41" />
      <circle cx="648" cy="300" r="44" fill="none" stroke="#C45C2A" strokeWidth="22" strokeOpacity="0.7" strokeDasharray="55 221" strokeDashoffset="-69" />
      <circle cx="648" cy="300" r="26" fill="white" />
      <rect x="608" y="354" width="24" height="8" rx="3" fill="#1B3A6B" opacity="0.4" />
      <rect x="640" y="354" width="24" height="8" rx="3" fill="#C45C2A" opacity="0.4" />

      {/* Table area */}
      <rect x="180" y="398" width="560" height="104" rx="6" fill="white" style={{ filter: "drop-shadow(0 1px 4px rgba(27,58,107,0.08))" }} />
      <rect x="196" y="412" width="70" height="9" rx="3" fill="#1B3A6B" opacity="0.6" />
      <rect x="196" y="430" width="524" height="1" fill="#1B3A6B" opacity="0.07" />
      <rect x="196" y="444" width="120" height="8" rx="3" fill="#1B3A6B" opacity="0.25" />
      <rect x="420" y="444" width="60" height="8" rx="3" fill="#1B3A6B" opacity="0.2" />
      <rect x="620" y="444" width="60" height="8" rx="3" fill="#22c55e" opacity="0.5" />
      <rect x="196" y="462" width="100" height="8" rx="3" fill="#1B3A6B" opacity="0.18" />
      <rect x="420" y="462" width="70" height="8" rx="3" fill="#1B3A6B" opacity="0.15" />
      <rect x="620" y="462" width="50" height="8" rx="3" fill="#C45C2A" opacity="0.45" />
      <rect x="196" y="480" width="130" height="8" rx="3" fill="#1B3A6B" opacity="0.18" />
      <rect x="420" y="480" width="55" height="8" rx="3" fill="#1B3A6B" opacity="0.15" />
      <rect x="620" y="480" width="60" height="8" rx="3" fill="#22c55e" opacity="0.4" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <FadeUp delay={0}>
              <p
                className="font-sans font-medium text-orange mb-6 tracking-eyebrow uppercase"
                style={{ fontSize: "11px" }}
              >
                THE FOUNDER PROTOTYPE PROGRAM
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1
                className="font-display font-semibold text-navy mb-7 leading-tight"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: "1.08",
                }}
              >
                A working prototype in{" "}
                <em className="text-orange not-italic italic">two weeks.</em>
                {" "}For $10,000.
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-sans text-text-muted mb-10" style={{ fontSize: "19px", lineHeight: "1.7" }}>
                We help non-technical founders turn an early-stage idea into a real, deployed
                prototype — something you can put in front of real users and show to investors.
                Fast enough to keep your momentum. Affordable enough to fund out of pre-seed savings.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#book"
                  className="font-sans font-medium text-sm bg-navy text-white px-7 py-3.5 hover:bg-navy-dark transition-colors"
                  style={{ borderRadius: "2px" }}
                >
                  Book a Free Call →
                </a>
                <a
                  href="#process"
                  className="font-sans font-medium text-sm text-slate hover:underline transition-colors"
                >
                  See how it works →
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right: Dashboard mockup */}
          <FadeUp delay={0.15}>
            <DashboardMockup />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
