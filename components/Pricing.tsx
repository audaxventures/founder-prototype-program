"use client";

import FadeUp from "./FadeUp";

const bullets = [
  "Flat rate, no overages",
  "2-week timeline",
  "Senior team, start to finish",
  "Full IP transfer",
  "Post-launch support included",
];

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 bg-navy-dark text-center">
      <div className="max-w-3xl mx-auto px-6">
        <FadeUp delay={0}>
          <p
            className="font-sans font-medium text-orange mb-5 tracking-eyebrow uppercase"
            style={{ fontSize: "11px" }}
          >
            SIMPLE, TRANSPARENT PRICING
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2
            className="font-display font-semibold text-white mb-10"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.01em",
              lineHeight: "1.08",
            }}
          >
            One fixed price. No surprises.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mb-5">
            <span
              className="font-display font-semibold text-white"
              style={{ fontSize: "clamp(5rem, 10vw, 90px)", lineHeight: 1, letterSpacing: "-0.02em" }}
            >
              $10,000
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <p
            className="font-sans mb-10"
            style={{ fontSize: "13px", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)" }}
          >
            Fixed fee · No equity · No retainer · No hidden costs
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 mb-12">
            {bullets.map((b, i) => (
              <span key={i} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="text-orange" style={{ fontSize: "10px" }}>●</span>
                )}
                <span
                  className="font-sans"
                  style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}
                >
                  {b}
                </span>
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div
            className="flex items-start gap-4 text-left mx-auto mb-10 px-7 py-6"
            style={{
              maxWidth: "520px",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "4px",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <span style={{ fontSize: "28px", lineHeight: 1, flexShrink: 0 }}>🛡️</span>
            <div>
              <p className="font-sans font-medium text-white mb-1" style={{ fontSize: "15px" }}>
                Zero Risk. 100% Guaranteed.
              </p>
              <p className="font-sans" style={{ fontSize: "14px", lineHeight: "1.65", color: "rgba(255,255,255,0.6)" }}>
                If you&apos;re not completely satisfied with what we deliver, we&apos;ll refund your investment in full. No questions asked.
              </p>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <a
            href="#book"
            className="inline-block font-sans font-medium text-navy bg-white px-10 py-4 hover:bg-cream transition-colors"
            style={{ borderRadius: "2px", fontSize: "15px" }}
          >
            Book Your Free Call
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
