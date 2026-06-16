import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products, Product } from "./components/Products";
import { Features } from "./components/Features";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CartDrawer, CartItem } from "./components/CartDrawer";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      style={{
        fontFamily: "'Lato', sans-serif",
        background: "#FAF6F0",
        minHeight: "100vh",
      }}
    >
      <Header cartCount={totalCount} onCartClick={() => setCartOpen(true)} />

      <main>
        <Hero />
        <Products onAddToCart={handleAddToCart} />
        <Features />
        <Contact />
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}
