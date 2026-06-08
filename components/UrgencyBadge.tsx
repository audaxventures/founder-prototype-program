"use client";

import { useEffect, useState } from "react";

export default function UrgencyBadge() {
  const [label, setLabel] = useState("");

  useEffect(() => {
    setLabel(new Date().toLocaleString("en-US", { month: "long", year: "numeric" }));
  }, []);

  if (!label) return null;

  return (
    <p
      style={{
        fontSize: "13px",
        color: "rgba(27,58,107,0.55)",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#C45C2A",
          flexShrink: 0,
          display: "inline-block",
        }}
      />
      We take on a limited number of projects each month — currently booking {label}.
    </p>
  );
}
