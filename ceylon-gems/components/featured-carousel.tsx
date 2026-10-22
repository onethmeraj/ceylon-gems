"use client";

import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel";
import { GemCard } from "@/components/gem-card";
import type { Gem } from "@/data/gems";

export function FeaturedCarousel({ gems }: { gems: Gem[] }) {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent className="-ml-4">
        {gems.map((gem) => (
          <CarouselItem key={gem.id} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
            <GemCard gem={gem} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}