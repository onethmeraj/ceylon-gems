"use client";

import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import type { Gem } from "@/data/gems";

export function AddToCartButton({
  gem,
  variant = "outline",
  label,
}: {
  gem: Gem;
  variant?: "default" | "outline";
  label?: string;
}) {
  const { addToCart } = useCart();

  return (
    <Button
      size="lg"
      variant={variant}
      className={
        variant === "default"
          ? "flex-1 bg-stone-900 text-white hover:bg-stone-800 transition-colors"
          : "flex-1 border-stone-300 bg-white text-stone-900 hover:bg-stone-100 transition-colors"
      }
      onClick={() => addToCart(gem)}
    >
      {label || (variant === "default" ? "Inquire About This Gem" : "Add to Cart")}
    </Button>
  );
}