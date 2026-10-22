import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gems } from "@/data/gems";
import { formatLkr } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AddToCartButton } from "@/components/add-to-cart-button";

interface GemPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return gems.map((gem) => ({
    slug: gem.slug,
  }));
}

async function GemContent({ params }: GemPageProps) {
  const { slug } = await params;
  const gem = gems.find((g) => g.slug === slug);

  if (!gem) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-14 items-start">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-xs">
        <img
          src={gem.imageUrl}
          alt={gem.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant="secondary" className="border bg-white/90 font-sans text-[11px] text-stone-900 backdrop-blur-xs">
            {gem.type}
          </Badge>
        </div>

        {gem.certification && (
          <span className="absolute right-3 top-3 rounded-full bg-stone-950 px-3 py-1 font-sans text-[10px] font-semibold text-white shadow-xs">
            {gem.certification.lab} Certified
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between space-y-6">
        <div className="space-y-5">
          <div className="space-y-1.5">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-stone-500">
              {gem.origin}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-normal leading-tight text-stone-900">
              {gem.name}
            </h1>
          </div>

          <div className="space-y-1 pt-1">
            <span className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">
              {formatLkr(gem.priceLkr)}
            </span>
            <p className="font-sans text-xs text-stone-500 leading-relaxed">
              Includes taxes, official lab report, &amp; insured express delivery.
            </p>
          </div>

          <Separator className="bg-stone-200" />

          {/* Specifications Box */}
          <div className="space-y-2.5">
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-wider text-stone-500">
              Gemstone Specifications
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 rounded-xl border border-stone-200/80 bg-stone-50/80 p-4 font-sans text-xs">
              <div className="space-y-0.5">
                <span className="text-stone-500 text-[11px]">Gem Variety:</span>
                <p className="font-semibold text-stone-900">{gem.type}</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-stone-500 text-[11px]">Carat Weight:</span>
                <p className="font-semibold text-stone-900">{gem.weightCarat} ct</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-stone-500 text-[11px]">Origin:</span>
                <p className="font-semibold text-stone-900">{gem.origin}</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-stone-500 text-[11px]">Certification:</span>
                <p className="font-semibold text-stone-900">
                  {gem.certification ? gem.certification.lab : "Available on Request"}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex gap-3 pt-2">
            <AddToCartButton
              gem={gem}
              variant="default"
              label="Inquire About This Gem"
            />
            <AddToCartButton
              gem={gem}
              variant="outline"
              label="Add to Selection"
            />
          </div>
        </div>

        {/* Authenticity Guarantee */}
        <div className="rounded-xl border border-stone-200/80 bg-stone-50/80 p-4 font-sans text-xs text-stone-600 space-y-1">
          <p className="font-semibold text-stone-900">Authenticity Guaranteed</p>
          <p className="leading-relaxed text-stone-500">
            Includes physical gemological certificate, tamper-proof luxury packaging, and insured door-to-door delivery.
          </p>
        </div>
      </div>

      {/* Mobile Sticky Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2.5 border-t border-stone-200 bg-white/95 p-3.5 pb-5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md sm:hidden">
        <AddToCartButton
          gem={gem}
          variant="default"
          label="Inquire Now"
        />
        <AddToCartButton
          gem={gem}
          variant="outline"
          label="Add to Selection"
        />
      </div>
    </div>
  );
}

export default function GemDetailPage({ params }: GemPageProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 pb-28 sm:pb-16 md:py-12">
      {/* Back Link */}
      <div className="mb-4 sm:mb-6">
        <Link
          href="/gems"
          className="font-sans text-xs font-medium uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors"
        >
          ← Back to Collection
        </Link>
      </div>

      <Suspense fallback={<div className="py-20 text-center font-sans text-xs text-stone-500">Loading gemstone details...</div>}>
        <GemContent params={params} />
      </Suspense>
    </main>
  );
}