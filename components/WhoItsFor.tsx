"use client";

import FadeUp from "./FadeUp";
import { openCalendlyModal } from "./CalendlyModal";

const checks = [
  "You don't have a technical co-founder and need someone to build your vision",
  "You need to put your idea in front of real users to validate it before going all-in",
  "You want something tangible for investors — not just a slide deck",
  "You need to move quickly without spending a fortune or giving up equity",
  "You want a development partner who can scale with you after launch",
];

export default function WhoItsFor() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <FadeUp delay={0}>
              <p
                className="font-sans font-medium text-orange mb-5 tracking-eyebrow uppercase"
                style={{ fontSize: "11px" }}
              >
                DESIGNED FOR THE PRE-SEED FOUNDER
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                className="font-display font-semibold text-navy mb-7"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: "1.08",
                }}
              >
                Built for founders who don&apos;t have a technical co-founder yet.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-sans text-text-muted" style={{ fontSize: "19px", lineHeight: "1.7" }}>
                Whether you&apos;re validating a new concept or preparing to raise your first round,
                this program gives you the most important thing you can have: proof that it works.
              </p>
            </FadeUp>
          </div>

          {/* Right: Checklist */}
          <div className="space-y-5">
            {checks.map((item, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.08}>
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-orange flex items-center justify-center mt-0.5"
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-sans text-text-muted" style={{ fontSize: "18px", lineHeight: "1.6" }}>
                    {item}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
        <FadeUp delay={0.6}>
          <div className="mt-12 text-center">
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
