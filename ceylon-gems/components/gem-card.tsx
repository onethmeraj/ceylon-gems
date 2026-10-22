import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatLkr } from "@/lib/format";
import type { Gem } from "@/data/gems";

export function GemCard({ gem }: { gem: Gem }) {
  return (
    <Link href={`/gems/${gem.slug}`} className="group block">
      <Card className="overflow-hidden rounded-2xl border border-stone-200/80 bg-[#f8f8fa] p-3 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-white hover:border-stone-400 hover:shadow-xl hover:shadow-stone-950/5">
        {/* Photo Stage */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-stone-200/60">
          <img
            src={gem.imageUrl}
            alt={gem.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <Badge className="absolute left-3 top-3 border-none bg-stone-950/80 px-3 py-1 font-sans text-[11px] font-medium text-white backdrop-blur-md shadow-xs">
            {gem.type}
          </Badge>

          {gem.certification && (
            <span className="absolute right-3 top-3 rounded-full border border-stone-200/80 bg-white/95 px-2.5 py-0.5 font-sans text-[10px] font-semibold tracking-wider text-stone-900 backdrop-blur-md shadow-xs">
              {gem.certification.lab} Certified
            </span>
          )}
        </div>

        {/* Info Container */}
        <CardContent className="flex flex-col justify-between space-y-3 px-1 pt-4 pb-1 bg-transparent">
          <div className="space-y-1 min-h-[3.25rem]">
            <h3 className="font-serif text-lg font-normal leading-snug text-stone-900 transition-colors group-hover:text-stone-600 line-clamp-2">
              {gem.name}
            </h3>
            <p className="font-sans text-xs text-stone-500 tracking-wide truncate">
              {gem.origin} · {gem.weightCarat} ct
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-stone-200/80 pt-3">
            <span className="font-sans text-base font-bold text-stone-900">
              {formatLkr(gem.priceLkr)}
            </span>
            <span className="font-sans text-xs font-semibold text-stone-900 transition-transform duration-300 group-hover:translate-x-1 flex items-center gap-1">
              Details <span>→</span>
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}