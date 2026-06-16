export function Footer() {
  return (
    <footer style={{ background: "#1A0C06" }}>
      {/* Gold top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#B8862A]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#B8862A] flex items-center justify-center">
                <span className="text-white text-lg select-none">✝</span>
              </div>
              <div>
                <p className="text-white leading-none" style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", fontWeight: 600 }}>
                  Fe y Esperanza
                </p>
                <p className="text-[#C9A55A] leading-none" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Tienda Católica
                </p>
              </div>
            </div>
            <p
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", lineHeight: 1.7, fontWeight: 300, color: "#C8B89A" }}
            >
              Llevamos artículos de fe y devoción a los hogares colombianos, con amor y compromiso espiritual.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-[#B8862A] mb-4"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Productos", href: "#productos" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#C8B89A] hover:text-[#B8862A] transition-colors"
                    style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", fontWeight: 300 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div>
            <h4
              className="text-[#B8862A] mb-4"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              Contacto Rápido
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/573205399771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8B89A] hover:text-[#B8862A] transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", fontWeight: 300 }}
                >
                  +57 320 539 9771
                </a>
              </li>
              <li>
                <a
                  href="mailto:desarrollopersonal441@gmail.com"
                  className="text-[#C8B89A] hover:text-[#B8862A] transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", fontWeight: 300 }}
                >
                  desarrollopersonal441@gmail.com
                </a>
              </li>
              <li>
                <span
                  className="text-[#C8B89A]"
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", fontWeight: 300 }}
                >
                  Cartagena, Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#B8862A]/15 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", fontWeight: 300, color: "#8C7B6E" }}
          >
            © 2026 Tienda Católica Fe y Esperanza — Todos los derechos reservados
          </p>
          <p
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", fontWeight: 300, color: "#8C7B6E" }}
          >
            Hecho con fe ✝ Cartagena, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
