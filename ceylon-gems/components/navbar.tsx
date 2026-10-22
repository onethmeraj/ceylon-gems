"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingBag01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";

export function Navbar() {
  const { cart, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand Logo */}
        <Link href="/" className="font-serif text-xl font-medium tracking-tight text-stone-900">
          Ceylon Gems
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-stone-600">
          <Link href="/gems" className="transition-colors hover:text-stone-950">
            All Gemstones
          </Link>
          <Link href="/gems?type=Blue%20Sapphire" className="transition-colors hover:text-stone-950">
            Sapphires
          </Link>
          <Link href="/gems?type=Ruby" className="transition-colors hover:text-stone-950">
            Rubies
          </Link>
          <Link href="/about" className="transition-colors hover:text-stone-950">
            About Us
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-stone-300 bg-stone-50 px-4 text-xs font-semibold text-stone-900 hover:bg-stone-900 hover:text-white transition-all gap-2"
            onClick={() => setIsOpen(true)}
          >
            <HugeiconsIcon icon={ShoppingBag01Icon} strokeWidth={2} className="size-4" />
            <span className="hidden sm:inline">Inquiry Cart</span>
            <span className="flex size-5 items-center justify-center rounded-full bg-stone-900 text-[10px] font-bold text-white group-hover:bg-white group-hover:text-black">
              {cart.length}
            </span>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-sm" className="md:hidden">
                  <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
                </Button>
              }
            />
            <SheetContent side="right" className="w-72 p-6">
              <div className="flex flex-col gap-6 pt-8">
                <Link href="/" className="font-serif text-xl font-medium">
                  Ceylon Gems
                </Link>
                <div className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-wider text-stone-600">
                  <Link href="/gems">All Gemstones</Link>
                  <Link href="/gems?type=Blue%20Sapphire">Sapphires</Link>
                  <Link href="/gems?type=Ruby">Rubies</Link>
                  <Link href="/about">About Us</Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}