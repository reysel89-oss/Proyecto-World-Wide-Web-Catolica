import { X, ShoppingBag, Trash2, MessageCircle } from "lucide-react";
import { Product } from "./Products";

export interface CartItem extends Product {
  quantity: number;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
}

export function CartDrawer({ open, onClose, items, onRemove }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const buildWhatsAppMessage = () => {
    const lines = items.map(
      (item) => `• ${item.name} x${item.quantity} — $${item.price * item.quantity} USD`
    );
    const text = [
      "¡Hola! Me gustaría hacer el siguiente pedido:",
      "",
      ...lines,
      "",
      `Total: $${total} USD`,
      "",
      "¿Podrían confirmar disponibilidad y forma de pago? ¡Gracias!",
    ].join("\n");
    return encodeURIComponent(text);
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 flex flex-col transition-transform duration-400 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "#FFFDF8", boxShadow: "-4px 0 30px rgba(0,0,0,0.15)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(107,45,14,0.12)]">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} color="#6B2D0E" />
            <h2
              className="text-[#2C1810]"
              style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.3rem", fontWeight: 500 }}
            >
              Tu Pedido
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#8C7B6E] hover:text-[#2C1810] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <span className="text-5xl text-[#E8DDD4]">✝</span>
              <p
                className="text-[#8C7B6E]"
                style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.1rem" }}
              >
                Tu carrito está vacío
              </p>
              <p
                className="text-[#8C7B6E]"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", fontWeight: 300 }}
              >
                Agrega artículos desde nuestra tienda
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border border-[rgba(107,45,14,0.10)] bg-white"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[#2C1810] mb-1 truncate"
                    style={{ fontFamily: "'EB Garamond', serif", fontSize: "1rem", fontWeight: 500 }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="text-[#8C7B6E]"
                    style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem" }}
                  >
                    Cant.: {item.quantity}
                  </p>
                  <p
                    className="text-[#6B2D0E] mt-1"
                    style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", fontWeight: 600 }}
                  >
                    ${item.price * item.quantity} USD
                  </p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-[#C8B89A] hover:text-red-600 transition-colors self-start"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[rgba(107,45,14,0.12)]">
            <div className="flex items-center justify-between mb-4">
              <p
                className="text-[#8C7B6E]"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                Total
              </p>
              <p
                className="text-[#2C1810]"
                style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.6rem", fontWeight: 600 }}
              >
                ${total} <span style={{ fontSize: "0.8rem", fontWeight: 400, color: "#8C7B6E" }}>USD</span>
              </p>
            </div>
            <a
              href={`https://wa.me/573205399771?text=${buildWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-green-700 text-white hover:bg-green-800 transition-colors duration-300"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", letterSpacing: "0.08em" }}
            >
              <MessageCircle size={18} />
              Finalizar por WhatsApp
            </a>
            <p
              className="text-center text-[#8C7B6E] mt-3"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", fontWeight: 300 }}
            >
              Te contactaremos para confirmar pago y envío
            </p>
          </div>
        )}
      </div>
    </>
  );
}
