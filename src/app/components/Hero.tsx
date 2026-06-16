import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#1A0C06" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1569845177077-2a37322a60c7?w=1600&h=900&fit=crop&auto=format')",
          opacity: 0.35,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B8862A] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-[#B8862A]/60" />
          <span className="text-[#B8862A] text-2xl select-none">✝</span>
          <div className="h-px w-16 bg-[#B8862A]/60" />
        </div>

        <p
          className="text-[#C9A55A] mb-4 tracking-[0.25em] uppercase"
          style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem" }}
        >
          Artículos Religiosos Auténticos
        </p>

        <h1
          className="text-white mb-6"
          style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
            fontWeight: 500,
            lineHeight: 1.15,
          }}
        >
          Fortalece Tu Fe con
          <br />
          <em style={{ color: "#C9A55A" }}>Devoción y Oración</em>
        </h1>

        <p
          className="text-white/70 max-w-xl mx-auto mb-10"
          style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", lineHeight: 1.7, fontWeight: 300 }}
        >
          Rosarios, biblias, imágenes y artículos de devoción, seleccionados con amor para acompañar tu camino espiritual.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#productos"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#B8862A] text-white hover:bg-[#9A7020] transition-colors duration-300"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Ver Productos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/40 text-white hover:border-[#B8862A] hover:text-[#C9A55A] transition-colors duration-300"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#productos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#B8862A] transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>

      {/* Gold bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B8862A] to-transparent" />
    </section>
  );
}
