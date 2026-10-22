"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { formatLkr } from "@/lib/format";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02Icon, ShoppingBag01Icon } from "@hugeicons/core-free-icons";

export function CartSheet() {
  const { cart, isOpen, setIsOpen, removeFromCart, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const totalLkr = cart.reduce((acc, gem) => acc + gem.priceLkr, 0);

  const handleInquiry = () => {
    setSubmitted(true);
    setTimeout(() => {
      clearCart();
      setSubmitted(false);
      setIsOpen(false);
    }, 2500);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md p-6 flex flex-col justify-between">
        <SheetHeader className="p-0 border-b pb-4">
          <SheetTitle className="flex items-center gap-2 text-lg font-semibold">
            <HugeiconsIcon icon={ShoppingBag01Icon} strokeWidth={2} className="size-5" />
            Inquiry Selection ({cart.length})
          </SheetTitle>
        </SheetHeader>

        {submitted ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-3 text-center">
            <div className="size-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl font-bold">
              ✓
            </div>
            <h3 className="text-lg font-semibold text-stone-900">Inquiry Request Sent!</h3>
            <p className="text-xs text-stone-500 max-w-xs">
              Thank you for your interest. Our gemologist will contact you shortly regarding stone availability and purchase details.
            </p>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-3 text-center">
            <p className="text-sm font-medium text-stone-800">Your inquiry selection is empty</p>
            <p className="text-xs text-stone-500">
              Browse our gemstone collection and add stones to request pricing or reserve them.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto py-4 space-y-4 divide-y">
            {cart.map((gem) => (
              <div key={gem.id} className="pt-4 first:pt-0 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-stone-900 leading-tight">
                    {gem.name}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {gem.type} · {gem.weightCarat} ct
                  </p>
                  <p className="text-xs font-semibold text-stone-900 pt-0.5">
                    {formatLkr(gem.priceLkr)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  onClick={() => removeFromCart(gem.id)}
                  className="text-stone-400 hover:text-red-600"
                >
                  <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
                </Button>
              </div>
            ))}
          </div>
        )}

        {!submitted && cart.length > 0 && (
          <SheetFooter className="p-0 border-t pt-4 flex-col gap-3">
            <div className="flex justify-between items-center w-full text-sm">
              <span className="text-stone-500">Estimated Total Value:</span>
              <span className="font-bold text-base text-stone-900">{formatLkr(totalLkr)}</span>
            </div>
            <Button
              onClick={handleInquiry}
              className="w-full bg-stone-900 text-white hover:bg-stone-800 h-11"
            >
              Submit Inquiry Request
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}