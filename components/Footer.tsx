export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{ backgroundColor: "#0D1E3D" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <p
          className="font-sans"
          style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}
        >
          © 2025 Audax Ventures · Founder Prototype Program
        </p>
        <a
          href="https://www.audaxventures.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans font-medium text-white border hover:bg-white hover:text-navy transition-colors"
          style={{ fontSize: "13px", borderColor: "rgba(255,255,255,0.25)", borderRadius: "2px", padding: "8px 18px" }}
        >
          Visit the Main Audax Ventures Website →
        </a>
        <p
          className="font-sans"
          style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}
        >
          Questions?{" "}
          <a
            href="mailto:info@audaxventures.ca"
            className="text-orange-light hover:underline"
          >
            info@audaxventures.ca
          </a>
        </p>
      </div>
    </footer>
  );
}
