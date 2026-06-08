"use client";

import FadeUp from "./FadeUp";
import { openCalendlyModal } from "./CalendlyModal";

const testimonials = [
  {
    quote:
      "I came to Audax with nothing but a napkin sketch and a lot of questions. Two weeks later I had a working product I was genuinely proud to show investors. It changed everything for my raise.",
    name: "Sarah K.",
    role: "Founder, HealthTech Startup",
    company: "Beacon – SaaS Product",
    initials: "SK",
    color: "#E8EDF5",
  },
  {
    quote:
      "As a non-technical founder, I'd been burned before by agencies that overpromised and underdelivered. Audax was completely different — transparent, fast, and they actually cared about what I was building.",
    name: "Marcus T.",
    role: "CEO, B2B Marketplace",
    company: "Keystone – Project Management",
    initials: "MT",
    color: "#EDF0E8",
  },
  {
    quote:
      "The fixed price and two-week timeline felt almost too good to be true. It wasn't. We had a deployed prototype at the end of week two, exactly as promised. Worth every dollar.",
    name: "Priya M.",
    role: "Co-Founder, AI Productivity App",
    company: "Pulse – SaaS Analytics",
    initials: "PM",
    color: "#F0EBE8",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <FadeUp delay={0}>
            <p
              className="font-sans font-medium text-orange mb-5 tracking-eyebrow uppercase"
              style={{ fontSize: "11px" }}
            >
              WHAT FOUNDERS SAY
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display font-semibold text-navy"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.01em",
                lineHeight: "1.08",
              }}
            >
              Real results for early-stage founders.
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.1}>
              <div
                className="p-8 h-full flex flex-col"
                style={{
                  borderTop: "2px solid #C45C2A",
                  border: "0.5px solid rgba(27,58,107,0.12)",
                  borderTopWidth: "2px",
                  borderTopColor: "#C45C2A",
                  boxShadow: "0 2px 16px rgba(27,58,107,0.07)",
                }}
              >
                <blockquote
                  className="font-display text-navy flex-1 mb-8"
                  style={{ fontSize: "18px", lineHeight: "1.65" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  {/* Swap /avatar-1.jpg, /avatar-2.jpg, /avatar-3.jpg for real photos */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: t.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      className="font-sans font-medium text-navy"
                      style={{ fontSize: "14px" }}
                    >
                      {t.initials}
                    </span>
                  </div>
                  <p className="font-sans font-medium text-navy" style={{ fontSize: "14px" }}>
                    {t.name}
                  </p>
                  <p className="font-sans text-slate" style={{ fontSize: "15px" }}>
                    {t.role}
                  </p>
                  <span
                    className="font-sans text-orange"
                    style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    {t.company}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
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
