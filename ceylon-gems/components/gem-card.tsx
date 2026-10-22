import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatLkr } from "@/lib/format";
import type { Gem } from "@/data/gems";

export function GemCard({ gem }: { gem: Gem }) {
  return (
    <Link href={`/gems/${gem.slug}`} className="group block">
      <Card className="overflow-hidden rounded-2xl border border-stone-200/80 bg-[#f4f4f6] p-3 transition-all duration-300 hover:bg-white hover:border-stone-400 hover:shadow-xl">
        {/* Photo Container */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-stone-200">
          <img
            src={gem.imageUrl}
            alt={gem.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <Badge className="absolute left-3 top-3 border-none bg-black/80 px-3 py-1 text-[11px] font-medium text-white shadow-sm backdrop-blur-xs">
            {gem.type}
          </Badge>

          {gem.certification && (
            <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-stone-900 shadow-sm border border-stone-200">
              {gem.certification.lab} Certified
            </span>
          )}
        </div>

        {/* Card Info */}
        <CardContent className="space-y-2 px-2 pt-4 pb-2">
          <div>
            <h3 className="font-serif text-lg font-medium text-stone-900 group-hover:underline">
              {gem.name}
            </h3>
            <p className="text-xs text-stone-500">{gem.origin} · {gem.weightCarat} ct</p>
          </div>

          <div className="flex items-center justify-between border-t border-stone-200/60 pt-3">
            <span className="text-base font-bold text-stone-900">
              {formatLkr(gem.priceLkr)}
            </span>
            <span className="text-xs font-semibold text-stone-900 group-hover:translate-x-0.5 transition-transform">
              View Details →
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}