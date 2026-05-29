"use client";

import Script from "next/script";
import FadeUp from "./FadeUp";

export default function BookingMid() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#122851" }}>
      <div className="max-w-3xl mx-auto px-6">
        <FadeUp delay={0}>
          <div className="text-center mb-10">
            <p
              className="font-sans font-medium text-orange mb-5 tracking-eyebrow uppercase"
              style={{ fontSize: "11px" }}
            >
              READY TO BUILD?
            </p>
            <h2
              className="font-display font-semibold text-white mb-5"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.01em",
                lineHeight: "1.08",
              }}
            >
              Book your free strategy call.
            </h2>
            <p className="font-sans mx-auto" style={{ fontSize: "17px", lineHeight: "1.7", color: "rgba(255,255,255,0.65)", maxWidth: "480px" }}>
              30 minutes. No pitch. We&apos;ll tell you honestly whether this program is the right fit for your idea.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div
            className="overflow-hidden"
            style={{
              border: "0.5px solid rgba(255,255,255,0.15)",
              borderRadius: "4px",
              backgroundColor: "rgba(255,255,255,0.03)",
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/audax-ventures/audax-ventures-founder-prototype-program?hide_gdpr_banner=1&primary_color=1B3A6B"
              data-resize="true"
              style={{ minWidth: "320px", height: "1000px" }}
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="flex items-start gap-3 mt-8">
            <span style={{ fontSize: "20px", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>🛡️</span>
            <p className="font-sans" style={{ fontSize: "14px", lineHeight: "1.65", color: "rgba(255,255,255,0.55)" }}>
              <span className="font-medium text-white">Zero Risk. 100% Guaranteed.</span>{" "}
              If you&apos;re not completely satisfied with what we deliver, we&apos;ll refund your investment in full. No questions asked.
            </p>
          </div>
        </FadeUp>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
