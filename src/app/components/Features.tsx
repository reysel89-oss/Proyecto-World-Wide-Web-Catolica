import { Shield, Heart, Truck, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Artículos Auténticos",
    description: "Todos nuestros productos son elaborados por artesanos católicos comprometidos con la calidad y la fe.",
  },
  {
    icon: Heart,
    title: "Con Amor y Devoción",
    description: "Cada artículo se selecciona con amor, pensando en fortalecer la vida espiritual de tu familia.",
  },
  {
    icon: Truck,
    title: "Envío a Colombia",
    description: "Realizamos envíos a todo el país. Consulta disponibilidad y tiempos de entrega por WhatsApp.",
  },
  {
    icon: Star,
    title: "Atención Personalizada",
    description: "Te acompañamos en la elección del artículo ideal. Escríbenos y con gusto te asesoramos.",
  },
];

export function Features() {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden" style={{ background: "#2C1810" }}>
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8862A]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8862A]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-[#B8862A]/50" />
            <span className="text-[#B8862A] select-none">✝</span>
            <div className="h-px w-10 bg-[#B8862A]/50" />
          </div>
          <p
            className="text-[#B8862A] mb-2 tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem" }}
          >
            ¿Por Qué Elegirnos?
          </p>
          <h2
            style={{
              fontFamily: "'EB Garamond', serif",
              color: "#FFF8F0",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 500,
            }}
          >
            Nuestra Misión de Fe
          </h2>
          <p
            className="mt-3 max-w-lg mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.7, fontWeight: 300, color: "#C8B89A" }}
          >
            Somos una tienda familiar en Cartagena, Colombia, dedicada a llevar artículos de devoción a los hogares de toda Colombia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="text-center p-7 border border-[#B8862A]/15 hover:border-[#B8862A]/40 transition-colors duration-300"
                style={{ background: "rgba(255,248,240,0.04)" }}
              >
                <div className="w-12 h-12 mx-auto mb-5 rounded-full border border-[#B8862A]/40 flex items-center justify-center">
                  <Icon size={20} color="#B8862A" />
                </div>
                <h3
                  className="mb-3 text-white"
                  style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.15rem", fontWeight: 500 }}
                >
                  {f.title}
                </h3>
                <p
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", lineHeight: 1.7, fontWeight: 300, color: "#C8B89A" }}
                >
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 divide-x divide-[#B8862A]/20 border border-[#B8862A]/20">
          {[
            { value: "+500", label: "Clientes Felices" },
            { value: "+150", label: "Artículos Disponibles" },
            { value: "5★", label: "Calificación Promedio" },
          ].map((stat) => (
            <div key={stat.label} className="py-8 text-center">
              <p
                className="text-[#B8862A]"
                style={{ fontFamily: "'EB Garamond', serif", fontSize: "2.2rem", fontWeight: 600 }}
              >
                {stat.value}
              </p>
              <p
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C8B89A" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
