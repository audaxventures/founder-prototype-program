"use client";

import { useEffect, useState } from "react";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if ("ontouchstart" in window) return;
    if (sessionStorage.getItem("exit-intent-shown")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("exit-intent-shown", "1");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={() => setShow(false)}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "white",
          maxWidth: "480px",
          width: "100%",
          padding: "48px 40px",
          borderRadius: "4px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          style={{
            position: "absolute",
            top: "12px",
            right: "16px",
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#1B3A6B",
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <p
              className="font-sans font-medium text-orange tracking-eyebrow uppercase"
              style={{ fontSize: "11px", marginBottom: "12px" }}
            >
              BEFORE YOU GO
            </p>
            <h3
              className="font-display font-semibold text-navy"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.75rem)",
                marginBottom: "16px",
                lineHeight: "1.2",
              }}
            >
              Not ready to book yet?
            </h3>
            <p
              className="font-sans text-slate"
              style={{ fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}
            >
              Get our free guide:{" "}
              <strong>How to validate your startup idea before spending a dollar on development.</strong>
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Exit-intent email capture:", email);
                // TODO: connect to Mailchimp/ConvertKit
                setSubmitted(true);
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  display: "block",
                  width: "100%",
                  height: "48px",
                  border: "0.5px solid rgba(27,58,107,0.3)",
                  borderRadius: "2px",
                  fontFamily: "inherit",
                  fontSize: "15px",
                  padding: "0 12px",
                  marginBottom: "12px",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  display: "block",
                  width: "100%",
                  height: "48px",
                  backgroundColor: "#C9A84C",
                  color: "#1B3A6B",
                  border: "none",
                  borderRadius: "2px",
                  fontFamily: "inherit",
                  fontWeight: 500,
                  fontSize: "15px",
                  cursor: "pointer",
                  marginBottom: "16px",
                }}
              >
                Send Me the Guide
              </button>
            </form>
            <button
              onClick={() => setShow(false)}
              style={{
                display: "block",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "13px",
                color: "rgba(27,58,107,0.55)",
                textDecoration: "none",
                margin: "0 auto",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              No thanks, I&apos;ll figure it out myself
            </button>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "28px", marginBottom: "16px" }}>✓</div>
            <h3
              className="font-display font-semibold text-navy"
              style={{ fontSize: "clamp(1.4rem, 3vw, 1.75rem)", lineHeight: "1.2" }}
            >
              You&apos;re in — check your inbox shortly.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
