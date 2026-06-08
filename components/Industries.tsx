"use client";

import FadeUp from "./FadeUp";
import { openCalendlyModal } from "./CalendlyModal";

const industries = [
  "Healthcare",
  "Clean Tech",
  "AI & Machine Learning",
  "Marketplaces",
  "Consumer Apps",
  "FinTech",
  "SaaS Platforms",
  "E-Commerce",
  "EdTech",
  "PropTech",
];

export default function Industries() {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeUp delay={0}>
          <p
            className="font-sans font-medium mb-5 tracking-eyebrow uppercase"
            style={{ fontSize: "11px", color: "rgba(154,170,187,0.9)" }}
          >
            INDUSTRY EXPERIENCE
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2
            className="font-display font-semibold text-white mb-7"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.01em",
              lineHeight: "1.08",
            }}
          >
            We&apos;ve built across every major category. If you have an idea, we&apos;ve likely built something like it.
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p
            className="font-sans mb-12"
            style={{ fontSize: "19px", lineHeight: "1.7", color: "rgba(255,255,255,0.6)" }}
          >
            Our team is industry-agnostic. We don&apos;t specialize in one vertical — we specialize
            in taking ideas to working products, fast. Whatever market you&apos;re going after, we
            have the experience to build for it.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry) => (
              <span
                key={industry}
                className="font-sans px-4 py-2"
                style={{
                  border: "0.5px solid rgba(255,255,255,0.3)",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "15px",
                  letterSpacing: "0.04em",
                  borderRadius: "2px",
                }}
              >
                {industry}
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div
            className="pt-10"
            style={{ borderTop: "0.5px solid rgba(255,255,255,0.12)" }}
          >
            <p
              className="font-sans mb-8"
              style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)" }}
            >
              Not sure if your idea fits? Book a call and let&apos;s talk — we&apos;ll tell you honestly.
            </p>
            <a
              href="#book"
              onClick={(e) => { e.preventDefault(); openCalendlyModal(); }}
              className="inline-block font-sans font-medium text-sm bg-orange text-white px-8 py-4 hover:opacity-90 transition-opacity"
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
