import { useState } from "react";
import { ShoppingCart, Eye } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Rosario de Madera",
    price: 15,
    category: "Rosarios",
    image: "https://images.unsplash.com/photo-1570336684085-f8453342cfd7?w=600&h=600&fit=crop&auto=format",
    description: "Rosario artesanal elaborado en madera natural, con crucifijo dorado.",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Rosario de Cristal",
    price: 22,
    category: "Rosarios",
    image: "https://images.unsplash.com/photo-1528357136257-0c25517acfea?w=600&h=600&fit=crop&auto=format",
    description: "Elegante rosario con cuentas de cristal transparente y detalles en plata.",
  },
  {
    id: 3,
    name: "Biblia Católica",
    price: 25,
    category: "Libros",
    image: "https://images.unsplash.com/photo-1497621122273-f5cfb6065c56?w=600&h=600&fit=crop&auto=format",
    description: "Biblia completa con notas explicativas, mapas y concordancias.",
    badge: "Destacado",
  },
  {
    id: 4,
    name: "Libro de Oraciones",
    price: 18,
    category: "Libros",
    image: "https://images.unsplash.com/photo-1642022143908-fe7e3160a56e?w=600&h=600&fit=crop&auto=format",
    description: "Colección de oraciones para cada momento del día y de la vida.",
  },
  {
    id: 5,
    name: "Imagen Virgen María",
    price: 30,
    category: "Imágenes",
    image: "https://images.unsplash.com/photo-1565567246634-990fb94afff1?w=600&h=600&fit=crop&auto=format",
    description: "Hermosa figura de la Virgen María, acabado artesanal de alta calidad.",
    badge: "Popular",
  },
  {
    id: 6,
    name: "Virgen con Niño Jesús",
    price: 38,
    category: "Imágenes",
    image: "https://images.unsplash.com/photo-1681166625168-274941f469ed?w=600&h=600&fit=crop&auto=format",
    description: "Imagen de la Virgen María sosteniendo al Niño Jesús, estilo clásico.",
  },
  {
    id: 7,
    name: "Crucifijo Dorado",
    price: 40,
    category: "Crucifijos",
    image: "https://images.unsplash.com/photo-1613163215609-1f8fe3edc638?w=600&h=600&fit=crop&auto=format",
    description: "Crucifijo de pared con acabado dorado envejecido, 30 cm de alto.",
    badge: "Nuevo",
  },
  {
    id: 8,
    name: "Cruz de Madera",
    price: 20,
    category: "Crucifijos",
    image: "https://images.unsplash.com/photo-1611483710387-ef44d3e39937?w=600&h=600&fit=crop&auto=format",
    description: "Cruz decorativa tallada en madera noble, ideal para el hogar.",
  },
  {
    id: 9,
    name: "Set Velas y Candelabros",
    price: 28,
    category: "Devoción",
    image: "https://images.unsplash.com/photo-1698822079732-501a7e06860f?w=600&h=600&fit=crop&auto=format",
    description: "Set de velas aromáticas con candelabro de bronce para altar doméstico.",
  },
];

const categories = ["Todos", "Rosarios", "Libros", "Imágenes", "Crucifijos", "Devoción"];

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export function Products({ onAddToCart }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [addedId, setAddedId] = useState<number | null>(null);

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="productos" className="py-24" style={{ background: "#FAF6F0" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-[#B8862A]/50" />
            <span className="text-[#B8862A] select-none">✝</span>
            <div className="h-px w-10 bg-[#B8862A]/50" />
          </div>
          <p
            className="text-[#B8862A] mb-2 tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem" }}
          >
            Nuestra Selección
          </p>
          <h2
            style={{
              fontFamily: "'EB Garamond', serif",
              color: "#2C1810",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 500,
            }}
          >
            Artículos de Devoción
          </h2>
          <p
            className="text-[#8C7B6E] mt-3 max-w-lg mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.7, fontWeight: 300 }}
          >
            Cada artículo ha sido seleccionado con cuidado para acompañar tu vida espiritual y la de tu familia.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#6B2D0E] text-white"
                  : "bg-white text-[#6B2D0E] border border-[#6B2D0E]/20 hover:border-[#B8862A] hover:text-[#B8862A]"
              }`}
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", letterSpacing: "0.06em" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-[rgba(107,45,14,0.10)] hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-[#F0E8DC]" style={{ height: 260 }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 bg-[#B8862A] text-white px-2.5 py-1"
                    style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <p
                  className="text-[#B8862A] mb-1"
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
                >
                  {product.category}
                </p>
                <h3
                  className="mb-2 text-[#2C1810]"
                  style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.2rem", fontWeight: 500 }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-[#8C7B6E] mb-4 flex-1"
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", lineHeight: 1.6, fontWeight: 300 }}
                >
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="text-[#6B2D0E]"
                    style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.4rem", fontWeight: 600 }}
                  >
                    ${product.price} <span style={{ fontSize: "0.8rem", fontWeight: 400, color: "#8C7B6E" }}>USD</span>
                  </span>
                  <button
                    onClick={() => handleAdd(product)}
                    className={`flex items-center gap-2 px-4 py-2 transition-all duration-200 ${
                      addedId === product.id
                        ? "bg-green-700 text-white"
                        : "bg-[#6B2D0E] text-white hover:bg-[#B8862A]"
                    }`}
                    style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", letterSpacing: "0.06em" }}
                  >
                    <ShoppingCart size={14} />
                    {addedId === product.id ? "¡Añadido!" : "Añadir"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
