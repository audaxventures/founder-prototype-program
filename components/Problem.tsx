"use client";

import FadeUp from "./FadeUp";

export default function Problem() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#122851" }}>
      {/* Stats strip */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="px-8 py-8 text-center">
            <div
              className="font-display font-semibold text-white"
              style={{ fontSize: "52px", lineHeight: 1, letterSpacing: "-0.01em" }}
            >
              $10K
            </div>
            <div
              className="font-sans font-medium mt-2 mb-2"
              style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(154,170,187,0.9)" }}
            >
              Fixed Price
            </div>
            <p className="font-sans" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
              One flat rate. No equity, no retainer, no surprises.
            </p>
          </div>
          <div className="px-8 py-8 text-center">
            <div
              className="font-display font-semibold text-white"
              style={{ fontSize: "52px", lineHeight: 1, letterSpacing: "-0.01em" }}
            >
              14
            </div>
            <div
              className="font-sans font-medium mt-2 mb-2"
              style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(154,170,187,0.9)" }}
            >
              Days, Idea to Demo
            </div>
            <p className="font-sans" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
              From first call to a deployed prototype in your hands.
            </p>
          </div>
          <div className="px-8 py-8 text-center">
            <div
              className="font-display font-semibold text-white"
              style={{ fontSize: "52px", lineHeight: 1, letterSpacing: "-0.01em" }}
            >
              100%
            </div>
            <div
              className="font-sans font-medium mt-2 mb-2"
              style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(154,170,187,0.9)" }}
            >
              Yours to Keep
            </div>
            <p className="font-sans" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
              Full source code and IP ownership. Everything we build is yours.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center">
        <FadeUp delay={0}>
          <p
            className="font-sans font-medium mb-6 tracking-eyebrow uppercase"
            style={{ fontSize: "11px", color: "rgba(154,170,187,0.9)" }}
          >
            THE CHALLENGE EVERY FOUNDER FACES
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2
            className="font-display font-semibold text-white mb-10"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.01em",
              lineHeight: "1.08",
            }}
          >
            You have the idea. You just don&apos;t have someone to build it.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="text-left space-y-5">
            <p className="font-sans" style={{ fontSize: "17px", lineHeight: "1.7", color: "rgba(255,255,255,0.75)" }}>
              Most non-technical founders hit the same wall: you know exactly what you want to build,
              but you don&apos;t have a technical co-founder — and hiring a dev agency feels like a
              $100,000 commitment with no guarantees.
            </p>
            <p className="font-sans" style={{ fontSize: "17px", lineHeight: "1.7", color: "rgba(255,255,255,0.75)" }}>
              So the idea sits. Time passes. Someone else builds it.
            </p>
            <p className="font-sans" style={{ fontSize: "17px", lineHeight: "1.7", color: "rgba(255,255,255,0.75)" }}>
              We built the Founder Prototype Program to change that. A fixed price, a two-week timeline,
              and a senior team that treats your idea with the seriousness it deserves.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div
            className="mt-12 text-left px-8 py-6"
            style={{ borderLeft: "3px solid #C45C2A" }}
          >
            <p
              className="font-display italic text-white"
              style={{ fontSize: "22px", lineHeight: "1.5" }}
            >
              &ldquo;Fast enough to keep your momentum going. Affordable enough to fund out of pre-seed savings.&rdquo;
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
