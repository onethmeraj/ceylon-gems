"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Gem } from "@/data/gems";

interface CartContextType {
  cart: Gem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addToCart: (gem: Gem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Gem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (gem: Gem) => {
    setCart((prev) => {
      if (prev.some((item) => item.id === gem.id)) return prev;
      return [...prev, gem];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, isOpen, setIsOpen, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}