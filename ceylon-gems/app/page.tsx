import Link from "next/link";
import { FeaturedCarousel } from "@/components/featured-carousel";
import { GemCard } from "@/components/gem-card";
import { featuredGems, gemTypes, gems } from "@/data/gems";

const trust = [
  { label: "Unheated & Certified", note: "GIA · GUILD · CGL reports" },
  { label: "Direct Sri Lankan Origin", note: "Artisanal mining from Ratnapura" },
  { label: "Secure Transactions", note: "Pay in LKR via PayHere or Bank Transfer" },
];

export default function HomePage() {
  return (
    <main className="pb-24 bg-[#fbfbfd]">
      {/* Lustra-Style Dark Hero Section */}
      <section className="mx-auto max-w-7xl px-3 pt-3">
        <div className="relative overflow-hidden rounded-3xl bg-[#121214] text-white px-6 py-20 sm:py-28 text-center shadow-2xl">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-300">
              Ethically Sourced · Certified Ceylon Gems
            </span>
            <h1 className="font-serif text-4xl font-normal tracking-tight sm:text-6xl lg:text-7xl text-white">
              Discover Fine Ceylon Gemstones
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Hand-selected sapphires, rubies, and rare unheated precious stones directly from Sri Lanka with full lab provenance.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/gems"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-stone-950 transition-all hover:bg-stone-200 active:scale-95"
              >
                Browse Collection
              </Link>
              <Link
                href="/gems?type=Blue%20Sapphire"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 text-sm font-semibold text-white transition-all hover:bg-white/15 active:scale-95"
              >
                Explore Sapphires
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 divide-y divide-stone-200 border-y border-stone-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0 py-2">
          {trust.map((t) => (
            <div key={t.label} className="px-6 py-4 text-center">
              <p className="text-sm font-bold text-stone-900">{t.label}</p>
              <p className="text-xs text-stone-500 mt-0.5">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-6xl px-4 space-y-20">
        {/* Featured Stones */}
        <section className="space-y-6">
          <div className="flex items-end justify-between border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">Curated</span>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900">Featured Gemstones</h2>
            </div>
            <Link href="/gems" className="text-xs font-semibold uppercase tracking-wider text-stone-900 hover:underline">
              View All Collection →
            </Link>
          </div>
          <FeaturedCarousel gems={featuredGems} />
        </section>

        {/* Category Spotlight Blocks (Lustra Category Design) */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">Categories</span>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900">Browse by Variety</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {gemTypes.map((type) => (
              <Link
                key={type}
                href={`/gems?type=${encodeURIComponent(type)}`}
                className="group flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-[#f4f4f6] p-4 transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg"
              >
                <span className="text-xs font-bold tracking-wider uppercase opacity-60 group-hover:text-stone-400">
                  Variety
                </span>
                <span className="font-serif text-base font-medium pt-6 pb-2 text-stone-900 group-hover:text-white">
                  {type}
                </span>
                <span className="text-[11px] font-semibold text-stone-500 group-hover:text-stone-300">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* New Arrivals Grid */}
        <section className="space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">Inventory</span>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900">New Arrivals</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {gems.map((gem) => (
              <GemCard key={gem.id} gem={gem} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}