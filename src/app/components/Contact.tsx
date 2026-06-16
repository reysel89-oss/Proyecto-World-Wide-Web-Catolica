import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  const whatsappMsg = encodeURIComponent(
    "Hola, me interesa conocer más sobre sus artículos religiosos. ¿Podrían ayudarme?"
  );

  return (
    <section id="contacto" className="py-24" style={{ background: "#FAF6F0" }}>
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
            Estamos Para Servirte
          </p>
          <h2
            style={{
              fontFamily: "'EB Garamond', serif",
              color: "#2C1810",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 500,
            }}
          >
            Contáctanos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: contact info */}
          <div className="flex flex-col gap-6">
            <div
              className="p-8 border border-[rgba(107,45,14,0.12)] bg-white"
            >
              <h3
                className="mb-6 text-[#2C1810]"
                style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.4rem", fontWeight: 500 }}
              >
                Información de Contacto
              </h3>

              <div className="flex flex-col gap-6">
                <a
                  href={`https://wa.me/573205399771?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <MessageCircle size={18} className="text-green-700" />
                  </div>
                  <div>
                    <p
                      className="text-[#8C7B6E] mb-0.5"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                    >
                      WhatsApp
                    </p>
                    <p
                      className="text-[#2C1810] group-hover:text-[#B8862A] transition-colors"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem" }}
                    >
                      +57 320 539 9771
                    </p>
                    <p
                      className="text-green-700 mt-0.5"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 300 }}
                    >
                      Escríbenos ahora →
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:desarrollopersonal441@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#F0E8DC] border border-[#B8862A]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8DDD4] transition-colors">
                    <Mail size={18} color="#B8862A" />
                  </div>
                  <div>
                    <p
                      className="text-[#8C7B6E] mb-0.5"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                    >
                      Correo Electrónico
                    </p>
                    <p
                      className="text-[#2C1810] group-hover:text-[#B8862A] transition-colors"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem" }}
                    >
                      desarrollopersonal441@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#F0E8DC] border border-[#B8862A]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} color="#B8862A" />
                  </div>
                  <div>
                    <p
                      className="text-[#8C7B6E] mb-0.5"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                    >
                      Ubicación
                    </p>
                    <p
                      className="text-[#2C1810]"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem" }}
                    >
                      Cartagena de Indias, Colombia
                    </p>
                    <p
                      className="text-[#8C7B6E] mt-0.5"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 300 }}
                    >
                      Envíos a toda Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#F0E8DC] border border-[#B8862A]/20 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} color="#B8862A" />
                  </div>
                  <div>
                    <p
                      className="text-[#8C7B6E] mb-0.5"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                    >
                      Horario de Atención
                    </p>
                    <p
                      className="text-[#2C1810]"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem" }}
                    >
                      Lunes a Sábado, 8:00 am – 6:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/573205399771?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 bg-green-700 text-white hover:bg-green-800 transition-colors duration-300"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", letterSpacing: "0.08em" }}
            >
              <MessageCircle size={20} />
              Chatear por WhatsApp Ahora
            </a>
          </div>

          {/* Right: testimonials */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-[#2C1810] mb-2"
              style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.4rem", fontWeight: 500 }}
            >
              Lo Que Dicen Nuestros Clientes
            </h3>
            {[
              {
                name: "María González",
                city: "Bogotá",
                text: "Recibí el rosario en perfectas condiciones. La calidad es excelente y el servicio fue muy atento. Lo recomiendo de corazón.",
                stars: 5,
              },
              {
                name: "Carlos Rincón",
                city: "Medellín",
                text: "La Biblia que compré es preciosa. Le regalé una a mi madre y quedó encantada. El envío llegó rápido y bien empacado.",
                stars: 5,
              },
              {
                name: "Ana Lucía Moreno",
                city: "Cali",
                text: "Muy buena atención por WhatsApp. Me ayudaron a elegir el artículo ideal para primera comunión de mi hija.",
                stars: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="p-6 bg-white border border-[rgba(107,45,14,0.10)]"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-[#B8862A]" style={{ fontSize: "0.9rem" }}>★</span>
                  ))}
                </div>
                <p
                  className="text-[#2C1810] mb-4 italic"
                  style={{ fontFamily: "'EB Garamond', serif", fontSize: "1rem", lineHeight: 1.7 }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B8862A] flex items-center justify-center text-white"
                    style={{ fontFamily: "'EB Garamond', serif", fontSize: "1rem" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-[#2C1810]" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", fontWeight: 700 }}>{t.name}</p>
                    <p className="text-[#8C7B6E]" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem" }}>{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
