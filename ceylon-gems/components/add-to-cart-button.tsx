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
          ? "h-12 sm:h-13 w-full flex-1 whitespace-nowrap rounded-full bg-stone-950 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-md transition-all duration-300 hover:bg-stone-800 hover:shadow-xl hover:shadow-stone-900/10 active:scale-[0.97] px-6"
          : "h-12 sm:h-13 w-full flex-1 whitespace-nowrap rounded-full border border-stone-300 bg-white font-sans text-xs font-semibold uppercase tracking-[0.15em] text-stone-900 shadow-xs transition-all duration-300 hover:border-stone-950 hover:bg-stone-950 hover:text-white active:scale-[0.97] px-6"
      }
      onClick={() => addToCart(gem)}
    >
      {label || (variant === "default" ? "Inquire About This Gem" : "Add to Cart")}
    </Button>
  );
}