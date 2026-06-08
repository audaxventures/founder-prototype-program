"use client";

import FadeUp from "./FadeUp";
import { openCalendlyModal } from "./CalendlyModal";

const cards = [
  {
    num: "01",
    phase: "DAYS 1–3",
    title: "Discovery",
    description:
      "We sit down with you — as a team — to unpack your idea and define the smallest version of the product that proves your concept. By the end of these sessions you'll have a clear scope, a defined user flow, and a build plan.",
    tag: "Scope · User flow · Build plan",
  },
  {
    num: "02",
    phase: "DAYS 4–14",
    title: "Build",
    description:
      "Our senior development team designs, builds, and deploys a working prototype around your core user flow. You see progress every day and give feedback as we go — so what we deliver is exactly what you need to test in the market.",
    tag: "Design · Engineering · Deploy",
  },
  {
    num: "03",
    phase: "POST-LAUNCH",
    title: "Ongoing Support",
    description:
      "We hand off a deployed prototype with full documentation and a demo walkthrough. Our team remains available as you learn from users, prepare to raise capital, or need to extend the product.",
    tag: "Handoff · Docs · Ongoing support",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <FadeUp delay={0}>
            <p
              className="font-sans font-medium text-orange mb-5 tracking-eyebrow uppercase"
              style={{ fontSize: "11px" }}
            >
              WHAT HAPPENS IN TWO WEEKS
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display font-semibold text-navy mb-6"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.01em",
                lineHeight: "1.08",
              }}
            >
              Discovery. Build. Launch.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-sans text-text-muted" style={{ fontSize: "19px", lineHeight: "1.7" }}>
              Our process is designed to move fast without cutting corners. Every day of the two
              weeks is accounted for.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.12}>
              <div
                className="bg-white p-8 h-full flex flex-col"
                style={{ border: "0.5px solid rgba(27,58,107,0.15)" }}
              >
                <div
                  className="font-display font-semibold text-navy mb-6"
                  style={{ fontSize: "56px", lineHeight: 1, opacity: 0.08 }}
                >
                  {card.num}
                </div>
                <p
                  className="font-sans font-medium text-orange mb-3 tracking-eyebrow uppercase"
                  style={{ fontSize: "10px" }}
                >
                  {card.phase}
                </p>
                <h3
                  className="font-display font-semibold text-navy mb-4"
                  style={{ fontSize: "1.6rem", lineHeight: "1.2" }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-sans text-text-muted flex-1"
                  style={{ fontSize: "17px", lineHeight: "1.7" }}
                >
                  {card.description}
                </p>
                <div
                  className="mt-6 pt-5"
                  style={{ borderTop: "0.5px solid rgba(27,58,107,0.12)" }}
                >
                  <span
                    className="font-sans text-slate"
                    style={{ fontSize: "12px", letterSpacing: "0.04em" }}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.5}>
          <div className="mt-14 text-center">
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
