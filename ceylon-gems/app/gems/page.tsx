import { Suspense } from "react";
import Link from "next/link";
import { GemCard } from "@/components/gem-card";
import { gemTypes, gems } from "@/data/gems";
import { Badge } from "@/components/ui/badge";

interface SearchParams {
  type?: string;
}

async function GemCatalog({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const selectedType = params.type;

  const filteredGems = selectedType
    ? gems.filter((gem) => gem.type === selectedType)
    : gems;

  return (
    <>
      <div className="flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/gems">
            <Badge
              variant={!selectedType ? "default" : "outline"}
              className="cursor-pointer px-3 py-1 text-xs"
            >
              All ({gems.length})
            </Badge>
          </Link>
          {gemTypes.map((type) => {
            const count = gems.filter((g) => g.type === type).length;
            const isSelected = selectedType === type;
            return (
              <Link key={type} href={`/gems?type=${encodeURIComponent(type)}`}>
                <Badge
                  variant={isSelected ? "default" : "outline"}
                  className="cursor-pointer px-3 py-1 text-xs"
                >
                  {type} ({count})
                </Badge>
              </Link>
            );
          })}
        </div>

        <div className="whitespace-nowrap text-xs text-stone-500">
          Showing {filteredGems.length} {filteredGems.length === 1 ? "stone" : "stones"}
        </div>
      </div>

      {filteredGems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredGems.map((gem) => (
            <GemCard key={gem.id} gem={gem} />
          ))}
        </div>
      ) : (
        <div className="space-y-3 py-20 text-center">
          <p className="text-lg font-medium text-stone-800">No gemstones found</p>
          <p className="text-sm text-stone-500">Try selecting a different filter to view available stones.</p>
          <Link
            href="/gems"
            className="inline-flex h-9 items-center justify-center rounded-md bg-stone-900 px-4 text-xs font-medium text-white transition-colors hover:bg-stone-800"
          >
            Clear filters
          </Link>
        </div>
      )}
    </>
  );
}

export default function GemsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="space-y-3 border-b pb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Gemstone Collection
        </h1>
        <p className="max-w-xl text-sm text-stone-600">
          Explore our curated selection of certified Sri Lankan gemstones. Every stone is unheated, ethically mined, and lab-verified.
        </p>
      </div>

      <Suspense fallback={<div className="py-12 text-center text-xs text-stone-500">Loading gemstones...</div>}>
        <GemCatalog searchParams={searchParams} />
      </Suspense>
    </main>
  );
}