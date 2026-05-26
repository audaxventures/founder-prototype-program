"use client";

import { Monitor, Code2, Users, FileText } from "lucide-react";
import FadeUp from "./FadeUp";

const items = [
  {
    icon: Monitor,
    title: "A deployed, working prototype",
    description:
      "Not a mockup or a Figma file. A real product with your core user flow, live on the internet and ready to test with real users.",
  },
  {
    icon: Code2,
    title: "Full source code & IP ownership",
    description:
      "You own 100% of everything we build. The code, the design, the deployment — all transferred to you at handoff. No lock-in.",
  },
  {
    icon: Users,
    title: "Something real to show investors",
    description:
      "Replace your pitch deck with a working demo. Show investors you can execute — not just describe an idea.",
  },
  {
    icon: FileText,
    title: "Documentation & demo walkthrough",
    description:
      "A complete handoff package so you — or any future developer you bring on — can understand and extend what was built.",
  },
];

export default function Deliverables() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <FadeUp delay={0}>
            <p
              className="font-sans font-medium text-orange mb-5 tracking-eyebrow uppercase"
              style={{ fontSize: "11px" }}
            >
              YOU WALK AWAY WITH
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
              Everything you need to move forward.
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-navy/10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeUp key={i} delay={0.1 + i * 0.1}>
                <div className="bg-white p-8 h-full">
                  <Icon size={22} className="text-navy mb-5" strokeWidth={1.5} />
                  <h3
                    className="font-sans font-medium text-navy mb-3"
                    style={{ fontSize: "16px" }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-sans text-text-muted" style={{ fontSize: "17px", lineHeight: "1.7" }}>
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
