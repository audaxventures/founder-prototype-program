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


function PlaceholderA() {
  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <rect width="600" height="400" fill="#EEF1F7" />
      {/* Top bar */}
      <rect width="600" height="40" fill="#1B3A6B" />
      <rect x="12" y="12" width="80" height="16" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="480" y="12" width="50" height="16" rx="4" fill="#C45C2A" />
      <rect x="538" y="12" width="50" height="16" rx="3" fill="rgba(255,255,255,0.12)" />
      {/* Sidebar */}
      <rect x="0" y="40" width="130" height="360" fill="#162E56" />
      <rect x="10" y="56" width="110" height="24" rx="3" fill="rgba(255,255,255,0.15)" />
      <rect x="18" y="63" width="60" height="9" rx="2" fill="rgba(255,255,255,0.6)" />
      <rect x="10" y="88" width="110" height="24" rx="3" fill="rgba(255,255,255,0.05)" />
      <rect x="18" y="95" width="45" height="9" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="10" y="118" width="110" height="24" rx="3" fill="rgba(255,255,255,0.05)" />
      <rect x="18" y="125" width="70" height="9" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="10" y="148" width="110" height="24" rx="3" fill="rgba(255,255,255,0.05)" />
      <rect x="18" y="155" width="52" height="9" rx="2" fill="rgba(255,255,255,0.3)" />
      {/* Metric cards */}
      <rect x="146" y="54" width="130" height="72" rx="5" fill="white" />
      <rect x="158" y="66" width="50" height="8" rx="2" fill="#1B3A6B" opacity="0.35" />
      <rect x="158" y="80" width="72" height="18" rx="3" fill="#1B3A6B" opacity="0.75" />
      <rect x="158" y="104" width="55" height="7" rx="2" fill="#C45C2A" opacity="0.55" />
      <rect x="292" y="54" width="130" height="72" rx="5" fill="white" />
      <rect x="304" y="66" width="55" height="8" rx="2" fill="#1B3A6B" opacity="0.35" />
      <rect x="304" y="80" width="62" height="18" rx="3" fill="#1B3A6B" opacity="0.75" />
      <rect x="304" y="104" width="48" height="7" rx="2" fill="#22c55e" opacity="0.55" />
      <rect x="438" y="54" width="148" height="72" rx="5" fill="white" />
      <rect x="450" y="66" width="60" height="8" rx="2" fill="#1B3A6B" opacity="0.35" />
      <rect x="450" y="80" width="80" height="18" rx="3" fill="#1B3A6B" opacity="0.75" />
      <rect x="450" y="104" width="52" height="7" rx="2" fill="#22c55e" opacity="0.45" />
      {/* Chart */}
      <rect x="146" y="140" width="280" height="148" rx="5" fill="white" />
      <rect x="158" y="152" width="70" height="9" rx="2" fill="#1B3A6B" opacity="0.55" />
      <rect x="166" y="252" width="18" height="24" rx="2" fill="#1B3A6B" opacity="0.15" />
      <rect x="194" y="236" width="18" height="40" rx="2" fill="#1B3A6B" opacity="0.25" />
      <rect x="222" y="222" width="18" height="54" rx="2" fill="#1B3A6B" opacity="0.38" />
      <rect x="250" y="208" width="18" height="68" rx="2" fill="#1B3A6B" opacity="0.52" />
      <rect x="278" y="216" width="18" height="60" rx="2" fill="#C45C2A" opacity="0.65" />
      <rect x="306" y="198" width="18" height="78" rx="2" fill="#1B3A6B" opacity="0.6" />
      <rect x="334" y="184" width="18" height="92" rx="2" fill="#1B3A6B" opacity="0.72" />
      <rect x="362" y="175" width="18" height="101" rx="2" fill="#1B3A6B" opacity="0.82" />
      <rect x="158" y="276" width="252" height="1" fill="#1B3A6B" opacity="0.08" />
      {/* Right panel */}
      <rect x="440" y="140" width="146" height="148" rx="5" fill="white" />
      <rect x="452" y="152" width="75" height="9" rx="2" fill="#1B3A6B" opacity="0.55" />
      <rect x="452" y="170" width="120" height="1" fill="#1B3A6B" opacity="0.07" />
      <rect x="452" y="181" width="90" height="8" rx="2" fill="#1B3A6B" opacity="0.2" />
      <rect x="452" y="198" width="75" height="8" rx="2" fill="#1B3A6B" opacity="0.15" />
      <rect x="452" y="215" width="100" height="8" rx="2" fill="#1B3A6B" opacity="0.18" />
      <rect x="452" y="232" width="60" height="8" rx="2" fill="#1B3A6B" opacity="0.12" />
      <rect x="452" y="249" width="85" height="8" rx="2" fill="#1B3A6B" opacity="0.15" />
      {/* Table */}
      <rect x="146" y="302" width="440" height="80" rx="5" fill="white" />
      <rect x="158" y="312" width="65" height="8" rx="2" fill="#1B3A6B" opacity="0.55" />
      <rect x="158" y="328" width="410" height="1" fill="#1B3A6B" opacity="0.06" />
      <rect x="158" y="338" width="100" height="7" rx="2" fill="#1B3A6B" opacity="0.2" />
      <rect x="340" y="338" width="60" height="7" rx="2" fill="#1B3A6B" opacity="0.15" />
      <rect x="500" y="338" width="55" height="7" rx="2" fill="#22c55e" opacity="0.45" />
      <rect x="158" y="354" width="85" height="7" rx="2" fill="#1B3A6B" opacity="0.15" />
      <rect x="340" y="354" width="70" height="7" rx="2" fill="#1B3A6B" opacity="0.12" />
      <rect x="500" y="354" width="45" height="7" rx="2" fill="#C45C2A" opacity="0.4" />
    </svg>
  );
}

function PlaceholderB() {
  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <rect width="600" height="400" fill="#F5F5F0" />
      {/* Top nav */}
      <rect width="600" height="44" fill="white" />
      <rect x="0" y="43" width="600" height="1" fill="#E5E7EB" />
      <rect x="16" y="14" width="70" height="16" rx="3" fill="#1B3A6B" opacity="0.7" />
      <rect x="200" y="16" width="50" height="12" rx="2" fill="#1B3A6B" opacity="0.15" />
      <rect x="260" y="16" width="55" height="12" rx="2" fill="#1B3A6B" opacity="0.15" />
      <rect x="325" y="16" width="45" height="12" rx="2" fill="#1B3A6B" opacity="0.15" />
      <rect x="510" y="10" width="74" height="24" rx="4" fill="#C45C2A" />
      {/* Hero banner */}
      <rect x="16" y="58" width="368" height="180" rx="5" fill="#1B3A6B" />
      <rect x="32" y="80" width="160" height="16" rx="3" fill="rgba(255,255,255,0.6)" />
      <rect x="32" y="104" width="220" height="28" rx="4" fill="rgba(255,255,255,0.85)" />
      <rect x="32" y="140" width="180" height="10" rx="2" fill="rgba(255,255,255,0.35)" />
      <rect x="32" y="158" width="200" height="10" rx="2" fill="rgba(255,255,255,0.25)" />
      <rect x="32" y="204" width="100" height="22" rx="3" fill="#C45C2A" />
      {/* Side cards */}
      <rect x="400" y="58" width="184" height="84" rx="5" fill="white" />
      <rect x="412" y="70" width="80" height="8" rx="2" fill="#1B3A6B" opacity="0.4" />
      <rect x="412" y="84" width="100" height="20" rx="3" fill="#1B3A6B" opacity="0.7" />
      <rect x="412" y="110" width="130" height="8" rx="2" fill="#1B3A6B" opacity="0.2" />
      <rect x="400" y="154" width="184" height="84" rx="5" fill="white" />
      <rect x="412" y="166" width="70" height="8" rx="2" fill="#1B3A6B" opacity="0.4" />
      <rect x="412" y="180" width="90" height="20" rx="3" fill="#C45C2A" opacity="0.7" />
      <rect x="412" y="206" width="120" height="8" rx="2" fill="#1B3A6B" opacity="0.2" />
      {/* Product grid */}
      <rect x="16" y="252" width="130" height="130" rx="5" fill="white" />
      <rect x="24" y="260" width="114" height="70" rx="3" fill="#EEF1F7" />
      <rect x="24" y="338" width="80" height="8" rx="2" fill="#1B3A6B" opacity="0.4" />
      <rect x="24" y="352" width="55" height="10" rx="2" fill="#1B3A6B" opacity="0.7" />
      <rect x="162" y="252" width="130" height="130" rx="5" fill="white" />
      <rect x="170" y="260" width="114" height="70" rx="3" fill="#EEF1F7" />
      <rect x="170" y="338" width="80" height="8" rx="2" fill="#1B3A6B" opacity="0.4" />
      <rect x="170" y="352" width="55" height="10" rx="2" fill="#1B3A6B" opacity="0.7" />
      <rect x="308" y="252" width="130" height="130" rx="5" fill="white" />
      <rect x="316" y="260" width="114" height="70" rx="3" fill="#EEF1F7" />
      <rect x="316" y="338" width="80" height="8" rx="2" fill="#1B3A6B" opacity="0.4" />
      <rect x="316" y="352" width="55" height="10" rx="2" fill="#1B3A6B" opacity="0.7" />
      <rect x="454" y="252" width="130" height="130" rx="5" fill="white" />
      <rect x="462" y="260" width="114" height="70" rx="3" fill="#EEF1F7" />
      <rect x="462" y="338" width="80" height="8" rx="2" fill="#1B3A6B" opacity="0.4" />
      <rect x="462" y="352" width="55" height="10" rx="2" fill="#1B3A6B" opacity="0.7" />
    </svg>
  );
}

function PlaceholderC() {
  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <rect width="600" height="400" fill="#F8F4EF" />
      {/* Header */}
      <rect width="600" height="48" fill="#1B3A6B" />
      <rect x="16" y="14" width="90" height="18" rx="3" fill="rgba(255,255,255,0.25)" />
      <rect x="420" y="14" width="70" height="18" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="500" y="12" width="84" height="22" rx="4" fill="#C45C2A" />
      {/* Left form panel */}
      <rect x="16" y="64" width="270" height="320" rx="5" fill="white" />
      <rect x="28" y="78" width="110" height="12" rx="3" fill="#1B3A6B" opacity="0.6" />
      <rect x="28" y="98" width="246" height="1" fill="#1B3A6B" opacity="0.07" />
      <rect x="28" y="110" width="70" height="8" rx="2" fill="#1B3A6B" opacity="0.3" />
      <rect x="28" y="124" width="246" height="28" rx="3" fill="#F4F6F9" />
      <rect x="28" y="162" width="70" height="8" rx="2" fill="#1B3A6B" opacity="0.3" />
      <rect x="28" y="176" width="246" height="28" rx="3" fill="#F4F6F9" />
      <rect x="28" y="214" width="80" height="8" rx="2" fill="#1B3A6B" opacity="0.3" />
      <rect x="28" y="228" width="246" height="28" rx="3" fill="#F4F6F9" />
      <rect x="28" y="266" width="80" height="8" rx="2" fill="#1B3A6B" opacity="0.3" />
      <rect x="28" y="280" width="246" height="52" rx="3" fill="#F4F6F9" />
      <rect x="28" y="344" width="246" height="28" rx="3" fill="#1B3A6B" />
      <rect x="95" y="352" width="112" height="12" rx="3" fill="rgba(255,255,255,0.5)" />
      {/* Right data panel */}
      <rect x="302" y="64" width="282" height="148" rx="5" fill="white" />
      <rect x="314" y="76" width="90" height="10" rx="2" fill="#1B3A6B" opacity="0.55" />
      <rect x="314" y="94" width="258" height="1" fill="#1B3A6B" opacity="0.06" />
      {/* Mini chart */}
      <rect x="314" y="106" width="30" height="60" rx="2" fill="#1B3A6B" opacity="0.1" />
      <rect x="350" y="118" width="30" height="48" rx="2" fill="#1B3A6B" opacity="0.2" />
      <rect x="386" y="106" width="30" height="60" rx="2" fill="#C45C2A" opacity="0.55" />
      <rect x="422" y="96" width="30" height="70" rx="2" fill="#1B3A6B" opacity="0.55" />
      <rect x="458" y="110" width="30" height="56" rx="2" fill="#1B3A6B" opacity="0.35" />
      <rect x="494" y="100" width="30" height="66" rx="2" fill="#1B3A6B" opacity="0.65" />
      <rect x="314" y="166" width="258" height="1" fill="#1B3A6B" opacity="0.06" />
      <rect x="314" y="174" width="120" height="8" rx="2" fill="#1B3A6B" opacity="0.2" />
      <rect x="452" y="174" width="60" height="8" rx="2" fill="#22c55e" opacity="0.5" />
      <rect x="314" y="190" width="100" height="8" rx="2" fill="#1B3A6B" opacity="0.15" />
      <rect x="452" y="190" width="70" height="8" rx="2" fill="#1B3A6B" opacity="0.2" />
      {/* Activity feed */}
      <rect x="302" y="228" width="282" height="156" rx="5" fill="white" />
      <rect x="314" y="240" width="100" height="10" rx="2" fill="#1B3A6B" opacity="0.55" />
      <rect x="314" y="258" width="258" height="1" fill="#1B3A6B" opacity="0.06" />
      <circle cx="326" cy="278" r="8" fill="#EEF1F7" />
      <rect x="342" y="272" width="110" height="8" rx="2" fill="#1B3A6B" opacity="0.25" />
      <rect x="342" y="284" width="80" height="7" rx="2" fill="#1B3A6B" opacity="0.12" />
      <circle cx="326" cy="308" r="8" fill="#EEF1F7" />
      <rect x="342" y="302" width="130" height="8" rx="2" fill="#1B3A6B" opacity="0.25" />
      <rect x="342" y="314" width="70" height="7" rx="2" fill="#1B3A6B" opacity="0.12" />
      <circle cx="326" cy="338" r="8" fill="#EEF1F7" />
      <rect x="342" y="332" width="95" height="8" rx="2" fill="#1B3A6B" opacity="0.25" />
      <rect x="342" y="344" width="85" height="7" rx="2" fill="#1B3A6B" opacity="0.12" />
      <circle cx="326" cy="368" r="8" fill="#EEF1F7" />
      <rect x="342" y="362" width="115" height="8" rx="2" fill="#1B3A6B" opacity="0.25" />
      <rect x="342" y="374" width="75" height="7" rx="2" fill="#1B3A6B" opacity="0.12" />
    </svg>
  );
}

const projects = [
  {
    Mockup: PlaceholderA,
    title: "Project Name",
    category: "SaaS / Analytics",
    description:
      "A placeholder description for this prototype. Update with the real project name, industry, and a one-line summary of what was built.",
  },
  {
    Mockup: PlaceholderB,
    title: "Project Name",
    category: "Marketplace",
    description:
      "A placeholder description for this prototype. Update with the real project name, industry, and a one-line summary of what was built.",
  },
  {
    Mockup: PlaceholderC,
    title: "Project Name",
    category: "Operations / Workflow",
    description:
      "A placeholder description for this prototype. Update with the real project name, industry, and a one-line summary of what was built.",
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
          {projects.map((project, i) => {
            const { Mockup } = project;
            return (
              <FadeUp key={i} delay={0.1 + i * 0.12}>
                <div
                  className="bg-white overflow-hidden flex flex-col"
                  style={{ border: "0.5px solid rgba(27,58,107,0.15)" }}
                >
                  {/* Screenshot */}
                  <div
                    className="overflow-hidden"
                    style={{ borderBottom: "0.5px solid rgba(27,58,107,0.1)" }}
                  >
                    <Mockup />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
