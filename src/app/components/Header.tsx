import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Cross } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Header({ cartCount, onCartClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#2C1810] shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#B8862A] flex items-center justify-center">
            <span className="text-white text-lg select-none">✝</span>
          </div>
          <div>
            <p className="text-white leading-none" style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.15rem", fontWeight: 600 }}>
              Fe y Esperanza
            </p>
            <p className="text-[#C9A55A] leading-none" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Tienda Católica
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#C9A55A] transition-colors duration-200"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Cart + hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative text-white hover:text-[#C9A55A] transition-colors duration-200"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#B8862A] text-white flex items-center justify-center"
                style={{ fontSize: "0.65rem", fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden text-white hover:text-[#C9A55A] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2C1810] border-t border-[#B8862A]/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-[#C9A55A] transition-colors py-1"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
