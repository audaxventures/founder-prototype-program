"use client";

import FadeUp from "./FadeUp";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Copy */}
          <div>
            <FadeUp delay={0}>
              <p
                className="font-sans font-medium text-orange mb-6 tracking-eyebrow uppercase"
                style={{ fontSize: "11px" }}
              >
                THE FOUNDER PROTOTYPE PROGRAM
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1
                className="font-display font-semibold text-navy mb-7 leading-tight"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: "1.08",
                }}
              >
                A working prototype in{" "}
                <em className="text-orange not-italic italic">two weeks.</em>
                {" "}For $10,000.
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-sans text-text-muted mb-10" style={{ fontSize: "17px", lineHeight: "1.7" }}>
                We help non-technical founders turn an early-stage idea into a real, deployed
                prototype — something you can put in front of real users and show to investors.
                Fast enough to keep your momentum. Affordable enough to fund out of pre-seed savings.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#book"
                  className="font-sans font-medium text-sm bg-navy text-white px-7 py-3.5 hover:bg-navy-dark transition-colors"
                  style={{ borderRadius: "2px" }}
                >
                  Book a Free Call →
                </a>
                <a
                  href="#process"
                  className="font-sans font-medium text-sm text-slate hover:underline transition-colors"
                >
                  See how it works →
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right: Stats Card */}
          <FadeUp delay={0.15}>
            <div
              className="bg-cream"
              style={{
                borderTop: "3px solid #C45C2A",
                border: "0.5px solid rgba(27,58,107,0.2)",
                borderTopWidth: "3px",
                borderTopColor: "#C45C2A",
              }}
            >
              {/* Stat 1 */}
              <div className="px-8 py-7" style={{ borderBottom: "0.5px solid rgba(27,58,107,0.12)" }}>
                <div
                  className="font-display font-semibold text-navy"
                  style={{ fontSize: "52px", lineHeight: 1, letterSpacing: "-0.01em" }}
                >
                  $10K
                </div>
                <div
                  className="font-sans font-medium text-navy mt-1.5 mb-2"
                  style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Fixed Price
                </div>
                <p className="font-sans text-slate" style={{ fontSize: "13px" }}>
                  One flat rate. No equity, no retainer, no surprises.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="px-8 py-7" style={{ borderBottom: "0.5px solid rgba(27,58,107,0.12)" }}>
                <div
                  className="font-display font-semibold text-navy"
                  style={{ fontSize: "52px", lineHeight: 1, letterSpacing: "-0.01em" }}
                >
                  14
                </div>
                <div
                  className="font-sans font-medium text-navy mt-1.5 mb-2"
                  style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Days, Idea to Demo
                </div>
                <p className="font-sans text-slate" style={{ fontSize: "13px" }}>
                  From first call to a deployed prototype in your hands.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="px-8 py-7">
                <div
                  className="font-display font-semibold text-navy"
                  style={{ fontSize: "52px", lineHeight: 1, letterSpacing: "-0.01em" }}
                >
                  100%
                </div>
                <div
                  className="font-sans font-medium text-navy mt-1.5 mb-2"
                  style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Yours to Keep
                </div>
                <p className="font-sans text-slate" style={{ fontSize: "13px" }}>
                  Full source code and IP ownership. Everything we build is yours.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
