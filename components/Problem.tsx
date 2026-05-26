"use client";

import FadeUp from "./FadeUp";

export default function Problem() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#122851" }}>
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
