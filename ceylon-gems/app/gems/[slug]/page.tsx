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
    <main className="mx-auto max-w-6xl px-4 py-8 md:py-16">
      <div className="mb-6">
        <Link
          href="/gems"
          className="text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-900 hover:underline"
        >
          ← Back to Collection
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
        {/* Main Gemstone Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm">
          <img
            src={gem.imageUrl}
            alt={gem.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute left-4 top-4 flex gap-2">
            <Badge variant="secondary" className="bg-white/90 border text-stone-900 backdrop-blur-xs">
              {gem.type}
            </Badge>
          </div>

          {gem.certification && (
            <span className="absolute right-4 top-4 rounded-full bg-stone-900 px-3 py-1 text-xs font-medium text-white shadow-sm">
              {gem.certification.lab} Certified
            </span>
          )}
        </div>

        {/* Details & Actions */}
        <div className="flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                {gem.origin}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900">
                {gem.name}
              </h1>
            </div>

            <div className="space-y-1 pt-1">
              <span className="text-3xl font-bold text-stone-900">
                {formatLkr(gem.priceLkr)}
              </span>
              <p className="text-xs text-stone-500">
                Includes taxes, testing report, &amp; insured express delivery.
              </p>
            </div>

            <Separator />

            {/* Specifications Box */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Gemstone Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4 rounded-xl border border-stone-200 bg-[#f4f4f6] p-4 text-xs">
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

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <AddToCartButton
                gem={gem}
                variant="default"
                label="Inquire About This Gem"
              />
              <AddToCartButton
                gem={gem}
                variant="outline"
                label="Add to Cart"
              />
            </div>
          </div>

          {/* Authenticity Guarantee */}
          <div className="rounded-xl border border-stone-200 bg-[#f4f4f6] p-4 text-xs text-stone-600 space-y-1">
            <p className="font-semibold text-stone-900">Authenticity Guaranteed</p>
            <p>
              Includes original physical gemological certificate, tamper-proof packaging, and insured door-to-door delivery.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}