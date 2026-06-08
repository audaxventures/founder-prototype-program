"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { openCalendlyModal } from "./CalendlyModal";

const stats = [
  { value: "10+ Years", label: "Building digital products" },
  { value: "30+", label: "Prototypes shipped" },
  { value: "Multiple industries", label: "Healthcare to AI to Marketplaces" },
];

export default function Team() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
          {/* Left: Photo */}
          <FadeUp delay={0}>
            <div
              className="relative w-full"
              style={{
                minHeight: "560px",
                border: "0.5px solid rgba(27,58,107,0.3)",
              }}
            >
              <Image
                src="/founder.jpg"
                alt="Founder, Audax Ventures"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>

          {/* Right: Copy */}
          <div className="flex flex-col justify-center">
            <FadeUp delay={0.1}>
              <p
                className="font-sans font-medium text-orange mb-5 tracking-eyebrow uppercase"
                style={{ fontSize: "11px" }}
              >
                WHO YOU&apos;RE WORKING WITH
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <h2
                className="font-display font-semibold text-navy mb-8"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: "1.08",
                }}
              >
                A founder-led team that has built real products.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="space-y-5 mb-10">
                <p className="font-sans text-text-muted" style={{ fontSize: "18px", lineHeight: "1.7" }}>
                  When you work with Audax Ventures, you&apos;re not handed off to a junior developer
                  or an offshore team. You work directly with our senior team — experienced builders
                  who have shipped products across dozens of industries.
                </p>
                <p className="font-sans text-text-muted" style={{ fontSize: "18px", lineHeight: "1.7" }}>
                  Our team combines product strategy, design, and engineering — all under one roof,
                  all aligned on one goal: getting your prototype in front of users as fast as possible.
                </p>
                <p className="font-sans text-text-muted" style={{ fontSize: "18px", lineHeight: "1.7" }}>
                  I started Audax Ventures because I kept meeting brilliant non-technical founders who
                  were stuck at the same point: they had the vision, the market knowledge, and the drive
                  — but no way to bring it to life without taking on massive risk. This program is the
                  answer I wish existed earlier.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div
                className="mb-10 pb-8"
                style={{ borderBottom: "0.5px solid rgba(27,58,107,0.15)" }}
              >
                <p className="font-sans font-medium text-navy" style={{ fontSize: "14px" }}>
                  Joshua Zaporzan
                </p>
                <p className="font-sans text-slate" style={{ fontSize: "15px" }}>
                  Founder, Audax Ventures
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div
                      className="font-display font-semibold text-navy mb-1"
                      style={{ fontSize: "1.3rem", lineHeight: 1.2 }}
                    >
                      {stat.value}
                    </div>
                    <p className="font-sans text-slate" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
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
