"use client";

import FadeUp from "./FadeUp";
import { openCalendlyModal } from "./CalendlyModal";

const rows = [
  {
    them: "You arrive with a spec. They build it — no questions asked.",
    us: "We help you define exactly what to build before a single line of code is written.",
  },
  {
    them: "Dev-only team. Strategy is your problem.",
    us: "Business strategists and senior developers working together from day one.",
  },
  {
    them: "Features decided by you, often over-built or off-target.",
    us: "Features prioritized around your users, your market, and your fundraising goals.",
  },
  {
    them: "You get the code. What comes next is up to you.",
    us: "You get working software, a strategic feature roadmap, and a partner for what's ahead.",
  },
];

export default function Differentiator() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6">

        <div className="max-w-2xl mx-auto text-center mb-16">
          <FadeUp delay={0}>
            <p
              className="font-sans font-medium text-orange mb-5 tracking-eyebrow uppercase"
              style={{ fontSize: "11px" }}
            >
              WHY AUDAX VENTURES
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display font-semibold text-navy mb-6"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.01em",
                lineHeight: "1.1",
              }}
            >
              Most shops build what you tell them to.{" "}
              <em className="not-italic text-orange">We help you figure out what to build.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-sans text-text-muted" style={{ fontSize: "19px", lineHeight: "1.7" }}>
              The hardest part of building a startup isn&apos;t writing code — it&apos;s knowing
              exactly what to build, in what order, and why. That&apos;s the strategic work we do
              together before development ever starts.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.25}>
          <div
            style={{
              border: "0.5px solid rgba(27,58,107,0.15)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {/* Column headers */}
            <div className="grid grid-cols-2">
              <div
                style={{
                  backgroundColor: "rgba(27,58,107,0.04)",
                  padding: "14px 32px",
                  borderBottom: "0.5px solid rgba(27,58,107,0.12)",
                  borderRight: "0.5px solid rgba(27,58,107,0.12)",
                }}
              >
                <p
                  className="font-sans font-medium text-slate tracking-eyebrow uppercase"
                  style={{ fontSize: "11px" }}
                >
                  Development-only shops
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#1B3A6B",
                  padding: "14px 32px",
                  borderBottom: "0.5px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="font-sans font-medium text-orange tracking-eyebrow uppercase"
                  style={{ fontSize: "11px" }}
                >
                  The Audax Ventures difference
                </p>
              </div>
            </div>

            {/* Comparison rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2"
                style={{
                  borderBottom: i < rows.length - 1 ? "0.5px solid rgba(27,58,107,0.1)" : "none",
                }}
              >
                <div
                  className="flex items-start gap-3"
                  style={{
                    backgroundColor: "white",
                    padding: "22px 32px",
                    borderRight: "0.5px solid rgba(27,58,107,0.1)",
                  }}
                >
                  <span
                    className="font-sans flex-shrink-0"
                    style={{ color: "rgba(27,58,107,0.2)", fontSize: "14px", marginTop: "3px" }}
                  >
                    ✕
                  </span>
                  <p
                    className="font-sans text-text-muted"
                    style={{ fontSize: "15px", lineHeight: "1.65" }}
                  >
                    {row.them}
                  </p>
                </div>
                <div
                  className="flex items-start gap-3"
                  style={{
                    backgroundColor: "rgba(27,58,107,0.025)",
                    padding: "22px 32px",
                  }}
                >
                  <span
                    className="font-sans font-medium flex-shrink-0"
                    style={{ color: "#C45C2A", fontSize: "14px", marginTop: "3px" }}
                  >
                    ✓
                  </span>
                  <p
                    className="font-sans font-medium text-navy"
                    style={{ fontSize: "15px", lineHeight: "1.65" }}
                  >
                    {row.us}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="mt-12 text-center">
            <p
              className="font-sans text-text-muted mb-7"
              style={{ fontSize: "17px", lineHeight: "1.7" }}
            >
              This is why our Discovery phase is the most important part of the engagement — not a
              formality, but where the real strategic work happens.
            </p>
            <a
              href="#book"
              onClick={(e) => { e.preventDefault(); openCalendlyModal(); }}
              className="inline-block font-sans font-medium text-sm bg-navy text-white px-8 py-4 hover:bg-navy-dark transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Book A FREE Strategy Call
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
