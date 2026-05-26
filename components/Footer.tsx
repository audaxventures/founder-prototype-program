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
          {" · "}
          <a
            href="https://audaxventures.ca"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.35)" }}
            className="hover:underline"
          >
            audaxventures.ca
          </a>
        </p>
      </div>
    </footer>
  );
}
