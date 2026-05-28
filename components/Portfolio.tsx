"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

const projects = [
  {
    image: "/project-1.png",
    title: "Beacon",
    category: "SaaS Product",
    description:
      "A project status page that gives stakeholders an instant read on progress, milestones, and launch readiness.",
  },
  {
    image: "/project-2.png",
    title: "Keystone",
    category: "Project Management",
    description:
      "A project management platform built for construction firms — tracking jobs, crews, budgets, and site progress from bid to closeout.",
  },
  {
    image: "/project-3.png",
    title: "Pulse",
    category: "SaaS Analytics",
    description:
      "A focused revenue dashboard that surfaces the single metric that matters, with year-over-year context at a glance.",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <FadeUp delay={0}>
            <p
              className="font-sans font-medium text-orange mb-5 tracking-eyebrow uppercase"
              style={{ fontSize: "11px" }}
            >
              OUR WORK
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display font-semibold text-navy mb-5"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.01em",
                lineHeight: "1.08",
              }}
            >
              What We Have Built
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-sans text-text-muted" style={{ fontSize: "19px", lineHeight: "1.7" }}>
              A selection of prototypes we have shipped for founders — each built in two weeks
              and handed off with full source code and IP ownership.
            </p>
          </FadeUp>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.12}>
              <div
                className="bg-white overflow-hidden flex flex-col"
                style={{ border: "0.5px solid rgba(27,58,107,0.15)" }}
              >
                {/* Screenshot */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "3/2", borderBottom: "0.5px solid rgba(27,58,107,0.1)" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                {/* Caption */}
                <div className="p-6">
                  <p
                    className="font-sans font-medium text-orange mb-1 uppercase tracking-eyebrow"
                    style={{ fontSize: "10px" }}
                  >
                    {project.category}
                  </p>
                  <h3
                    className="font-display font-semibold text-navy mb-3"
                    style={{ fontSize: "1.2rem", lineHeight: "1.3" }}
                  >
                    {project.title}
                  </h3>
                  <p className="font-sans text-text-muted" style={{ fontSize: "14px", lineHeight: "1.65" }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
