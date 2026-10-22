export interface Certification {
  lab: string;
  number: string;
}

export type GemType =
  | "Blue Sapphire"
  | "Yellow Sapphire"
  | "Padparadscha"
  | "Ruby"
  | "Cat's Eye"
  | "Moonstone";

export interface Gem {
  id: string;
  name: string;
  type: GemType;
  weightCarat: number;
  origin: string;
  priceLkr: number;
  slug: string;
  imageUrl: string; // <--- Added online image property
  certification?: Certification;
}

export const gemTypes: GemType[] = [
  "Blue Sapphire",
  "Yellow Sapphire",
  "Padparadscha",
  "Ruby",
  "Cat's Eye",
  "Moonstone",
];

export const gems: Gem[] = [
  {
    id: "gem-1",
    name: "Ceylon Royal Blue Sapphire 3.2ct",
    type: "Blue Sapphire",
    weightCarat: 3.2,
    origin: "Ratnapura, Sri Lanka",
    priceLkr: 485000,
    slug: "ceylon-royal-blue-sapphire-3-2ct",
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800",
    certification: { lab: "GIA", number: "GIA-22340192" },
  },
  {
    id: "gem-2",
    name: "Unheated Padparadscha Sapphire 2.1ct",
    type: "Padparadscha",
    weightCarat: 2.1,
    origin: "Elahera, Sri Lanka",
    priceLkr: 920000,
    slug: "unheated-padparadscha-sapphire-2-1ct",
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800",
    certification: { lab: "GUILD", number: "GL-883920" },
  },
  {
    id: "gem-3",
    name: "Natural Ceylon Vivid Ruby 1.8ct",
    type: "Ruby",
    weightCarat: 1.8,
    origin: "Ratnapura, Sri Lanka",
    priceLkr: 610000,
    slug: "natural-ceylon-vivid-ruby-1-8ct",
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800",
    certification: { lab: "CGL", number: "CGL-55910" },
  },
  {
    id: "gem-4",
    name: "Canary Yellow Sapphire 4.5ct",
    type: "Yellow Sapphire",
    weightCarat: 4.5,
    origin: "Balangoda, Sri Lanka",
    priceLkr: 380000,
    slug: "canary-yellow-sapphire-4-5ct",
    imageUrl: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800",
    certification: { lab: "GIA", number: "GIA-7710293" },
  },
  {
    id: "gem-5",
    name: "Honey Cat's Eye Chrysoberyl 3.0ct",
    type: "Cat's Eye",
    weightCarat: 3.0,
    origin: "Ratnapura, Sri Lanka",
    priceLkr: 275000,
    slug: "honey-cats-eye-chrysoberyl-3-0ct",
    imageUrl: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800",
  },
  {
    id: "gem-6",
    name: "Blue Sheen Ceylon Moonstone 5.2ct",
    type: "Moonstone",
    weightCarat: 5.2,
    origin: "Meetiyagoda, Sri Lanka",
    priceLkr: 145000,
    slug: "blue-sheen-ceylon-moonstone-5-2ct",
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
    certification: { lab: "CGL", number: "CGL-10492" },
  },
];

export const featuredGems = gems.slice(0, 4);