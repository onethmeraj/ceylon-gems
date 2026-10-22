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

export default async function GemDetailPage({ params }: GemPageProps) {
  const { slug } = await params;
  const gem = gems.find((g) => g.slug === slug);

  if (!gem) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:py-14 animate-in fade-in slide-in-from-bottom-3 duration-500 ease-out">
      {/* Back Link */}
      <div className="mb-6">
        <Link
          href="/gems"
          className="font-sans text-xs font-semibold uppercase tracking-wider text-stone-500 transition-colors hover:text-stone-950"
        >
          ← Back to Collection
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-14">
        {/* Main Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm">
          <img
            src={gem.imageUrl}
            alt={gem.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute left-4 top-4 flex gap-2">
            <Badge variant="secondary" className="border bg-white/90 font-sans text-xs text-stone-900 backdrop-blur-xs">
              {gem.type}
            </Badge>
          </div>

          {gem.certification && (
            <span className="absolute right-4 top-4 rounded-full bg-stone-950 px-3 py-1 font-sans text-xs font-semibold text-white shadow-sm">
              {gem.certification.lab} Certified
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-500">
                {gem.origin}
              </span>
              <h1 className="font-serif text-3xl font-normal text-stone-950 sm:text-4xl leading-tight">
                {gem.name}
              </h1>
            </div>

            <div className="space-y-1 pt-1">
              <span className="font-sans text-3xl font-bold text-stone-950">
                {formatLkr(gem.priceLkr)}
              </span>
              <p className="font-sans text-xs text-stone-500">
                Includes taxes, official testing report, &amp; insured express delivery.
              </p>
            </div>

            <Separator />

            {/* Specifications Box */}
            <div className="space-y-3">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-stone-500">
                Gemstone Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4 rounded-xl border border-stone-200/90 bg-[#f8f8fa] p-4 text-xs font-sans">
                <div>
                  <span className="text-stone-500">Gem Variety:</span>
                  <p className="font-semibold text-stone-900">{gem.type}</p>
                </div>
                <div>
                  <span className="text-stone-500">Carat Weight:</span>
                  <p className="font-semibold text-stone-900">{gem.weightCarat} ct</p>
                </div>
                <div>
                  <span className="text-stone-500">Origin:</span>
                  <p className="font-semibold text-stone-900">{gem.origin}</p>
                </div>
                <div>
                  <span className="text-stone-500">Certification:</span>
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
          <div className="rounded-xl border border-stone-200/90 bg-[#f8f8fa] p-4 font-sans text-xs text-stone-600 space-y-1">
            <p className="font-semibold text-stone-900">Authenticity Guaranteed</p>
            <p>
              Includes original physical gemological certificate, tamper-proof packaging, and insured door-to-door delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 border-t border-stone-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:hidden">
        <AddToCartButton
          gem={gem}
          variant="default"
          label="Inquire Now"
        />
        <AddToCartButton
          gem={gem}
          variant="outline"
          label="Add to Cart"
        />
      </div>
    </main>
  );
}