"use client";

import Script from "next/script";
import FadeUp from "./FadeUp";

export default function Booking() {
  return (
    <section id="book" className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <FadeUp delay={0}>
            <p
              className="font-sans font-medium text-orange mb-5 tracking-eyebrow uppercase"
              style={{ fontSize: "11px" }}
            >
              SCHEDULE A CALL
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display font-semibold text-navy-dark mb-7"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.01em",
                lineHeight: "1.08",
              }}
            >
              Let&apos;s talk about your idea.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-sans text-text-muted" style={{ fontSize: "19px", lineHeight: "1.7" }}>
              Book a free 30-minute call with our team. We&apos;ll listen to what you&apos;re building,
              answer your questions, and tell you honestly if the program is a good fit for where you
              are right now. No pressure. No pitch. Just a real conversation.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.25}>
          <div
            className="overflow-hidden bg-cream"
            style={{
              border: "0.5px solid rgba(27,58,107,0.2)",
              borderRadius: "4px",
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/audax-ventures/audax-ventures-founder-prototype-program?hide_gdpr_banner=1&primary_color=1B3A6B"
              style={{ minWidth: "320px", height: "700px" }}
            />
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
