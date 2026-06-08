"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { openCalendlyModal } from "./CalendlyModal";
import UrgencyBadge from "./UrgencyBadge";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
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
            <FadeUp delay={0.15}>
              <div className="mb-6">
                <UrgencyBadge />
              </div>
            </FadeUp>
            <FadeUp delay={0.22}>
              <p className="font-sans text-text-muted mb-10" style={{ fontSize: "19px", lineHeight: "1.7" }}>
                We help non-technical founders turn an early-stage idea into a real, deployed
                prototype — something you can put in front of real users and show to investors.
                Fast enough to keep your momentum. Affordable enough to fund out of pre-seed savings.
              </p>
            </FadeUp>
            <FadeUp delay={0.32}>
              <div className="flex flex-wrap items-center gap-5 mb-8">
                <a
                  href="#book"
                  onClick={(e) => { e.preventDefault(); openCalendlyModal(); }}
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
            <FadeUp delay={0.42}>
              <div className="flex items-start gap-3">
                <span style={{ fontSize: "20px", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>🛡️</span>
                <p className="font-sans text-slate" style={{ fontSize: "14px", lineHeight: "1.65" }}>
                  <span className="font-medium text-navy">Zero Risk. 100% Guaranteed.</span>{" "}
                  If you&apos;re not completely satisfied with what we deliver, we&apos;ll refund your investment in full. No questions asked.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right: Dashboard image */}
          <FadeUp delay={0.15}>
            <div
              className="w-full rounded-sm overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(27,58,107,0.18), 0 4px 16px rgba(27,58,107,0.1)" }}
            >
              <Image
                src="/dashboard.png"
                alt="Product dashboard"
                width={760}
                height={520}
                className="w-full h-auto"
                priority
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
