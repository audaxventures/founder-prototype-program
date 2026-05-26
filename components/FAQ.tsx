"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "./FadeUp";

const faqs = [
  {
    q: "What exactly do I get at the end of two weeks?",
    a: "You receive a fully deployed, working prototype built around your core user flow. This is a real product hosted live on the internet — not a mockup, not a prototype that only runs on someone's laptop. You also receive the complete source code, full IP ownership, technical documentation, and a demo walkthrough video. Everything we build is yours.",
  },
  {
    q: "I don't have a technical background. Will I understand what's being built?",
    a: "Absolutely — that's exactly who this program is designed for. We translate everything into plain language. During the build phase you'll see progress daily and give feedback through simple, non-technical conversations. You don't need to know how to code to be a great client.",
  },
  {
    q: "What if my idea is too complex to build in two weeks?",
    a: "This is what the Discovery phase is for. In days 1–3 we work with you to scope the smallest version of your product that proves your concept. Almost every idea can be distilled into a powerful, demonstrable prototype — and we've done it across dozens of industries. If for any reason your idea genuinely can't be scoped into two weeks, we'll tell you before the build starts.",
  },
  {
    q: "Do you take equity or have any ongoing fees?",
    a: "No. The program is a flat $10,000, one-time fee. We take no equity, no royalties, and there are no hidden costs or retainers. After the program ends, you own everything outright and there's no obligation to continue working with us — though many clients do.",
  },
  {
    q: "What industries do you work with?",
    a: "We're completely industry-agnostic. We've built prototypes for founders in healthcare, clean tech, AI, marketplaces, consumer apps, fintech, edtech, and more. If you have an idea and a target user, we can build for it. Book a call and we'll tell you honestly if we're a good fit.",
  },
  {
    q: "How do I know this will actually work for my specific idea?",
    a: "That's exactly what the free discovery call is for. Before you commit to anything, we'll spend 30 minutes with you, learn about your idea, and tell you honestly whether and how we can build it in the two-week window. There's no pressure and no obligation — just an honest conversation.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeUp delay={0.05 * index}>
      <div
        className="cursor-pointer"
        style={{ borderBottom: "0.5px solid rgba(27,58,107,0.15)" }}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center justify-between py-5 gap-6">
          <p
            className="font-sans font-medium text-navy"
            style={{ fontSize: "16px", lineHeight: "1.5" }}
          >
            {q}
          </p>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 font-sans font-medium text-navy text-xl leading-none"
            style={{ width: "20px", textAlign: "center" }}
          >
            +
          </motion.span>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <p
                className="font-sans text-text-muted pb-6"
                style={{ fontSize: "16px", lineHeight: "1.75" }}
              >
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-14">
          <FadeUp delay={0}>
            <p
              className="font-sans font-medium text-orange mb-5 tracking-eyebrow uppercase"
              style={{ fontSize: "11px" }}
            >
              COMMON QUESTIONS
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
              Everything you need to know before booking a call.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-sans text-text-muted" style={{ fontSize: "19px", lineHeight: "1.7" }}>
              Still on the fence? Here are the questions we hear most often — answered honestly.
            </p>
          </FadeUp>
        </div>

        <div style={{ borderTop: "0.5px solid rgba(27,58,107,0.15)" }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-14 text-center">
            <a
              href="#book"
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
