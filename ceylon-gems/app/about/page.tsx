import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const dynamic = "force-static";

const labPartners = [
  {
    name: "GIA",
    fullname: "Gemological Institute of America",
    description:
      "The global authority on gemological testing, diamond grading, and colored stone reports.",
  },
  {
    name: "GUILD",
    fullname: "Guild Gem Laboratories",
    description:
      "Specialized international testing center for colored gemstone origin and treatment verification.",
  },
  {
    name: "CGL",
    fullname: "Ceylon Gem Laboratory",
    description:
      "Sri Lanka's premier local gemological institute providing direct origin and authenticity certificates.",
  },
];

const pillars = [
  {
    step: "01",
    title: "Ethically Mined",
    description:
      "Sourced directly from artisanal mines in Ratnapura & Elahera under strict Sri Lankan environmental and labor guidelines.",
  },
  {
    step: "02",
    title: "100% Natural & Certified",
    description:
      "Specializing in unheated natural sapphires and rubies with full disclosure on treatment and official lab reports.",
  },
  {
    step: "03",
    title: "Direct Sri Lankan Provenance",
    description:
      "We eliminate middleman margins by exporting directly from the source to international buyers and collectors.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-16 animate-in fade-in duration-500">
      {/* Hero Header */}
      <section className="space-y-4 text-center max-w-3xl mx-auto">
        <Badge variant="outline" className="px-3 py-1 font-sans text-xs uppercase tracking-widest text-stone-600 border-stone-300">
          Sri Lankan Gem Mining Heritage
        </Badge>
        <h1 className="font-serif text-4xl font-normal tracking-tight sm:text-5xl text-stone-900 leading-tight">
          Crafting Trust in Fine Ceylon Gemstones
        </h1>
        <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
          Ceylon Gems connects gemstone collectors, fine jewelers, and investors worldwide directly to the rich gem fields of Sri Lanka. From unheated Royal Blue sapphires to rare Padparadscha stones, we offer ethically mined, fully certified gems with complete transparency.
        </p>
      </section>

      {/* Heritage & Story */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-2xl border border-stone-200/90 p-8 bg-[#f8f8fa]">
        <div className="space-y-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-wider text-stone-500">
            Our Story
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
            Centuries of Mining Excellence
          </h2>
          <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
            Sri Lanka, historically known as <em>Rathnadweepa</em> (&quot;Gem Island&quot;), has been producing world-renowned sapphires and precious stones for over 2,000 years.
          </p>
          <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
            Our operations bridge generations of traditional mining expertise with modern gemological testing. We work directly with licensed local miners, cutting master stones right here in Sri Lanka to preserve craftsmanship and maximum brilliance.
          </p>
        </div>
        <div className="rounded-xl border border-stone-200/80 bg-white p-6 space-y-4 font-sans text-stone-900 shadow-xs">
          <div className="space-y-1">
            <span className="font-serif text-3xl font-normal text-stone-900">2,000+ Years</span>
            <p className="text-xs text-stone-500">Of Sri Lankan Gem Mining History</p>
          </div>
          <Separator className="bg-stone-200" />
          <div className="space-y-1">
            <span className="font-serif text-3xl font-normal text-stone-900">100% Certified</span>
            <p className="text-xs text-stone-500">Unheated &amp; Natural Gemstones</p>
          </div>
          <Separator className="bg-stone-200" />
          <div className="space-y-1">
            <span className="font-serif text-3xl font-normal text-stone-900">Direct Export</span>
            <p className="text-xs text-stone-500">Worldwide Insured Door-to-Door Shipping</p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900">Our Core Principles</h2>
          <p className="font-sans text-xs text-stone-500">Guaranteeing authenticity, fair trade, and quality at every step.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="p-6 rounded-2xl border-stone-200/90 bg-[#f8f8fa] shadow-none">
              <CardContent className="p-0 space-y-3">
                <span className="font-sans text-xs font-bold text-stone-400 tracking-wider">{pillar.step}</span>
                <h3 className="font-serif text-xl font-normal text-stone-900">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Lab Partners */}
      <section className="rounded-2xl border border-stone-200/90 bg-[#f8f8fa] p-8 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <Badge variant="secondary" className="bg-stone-900 text-white font-sans text-xs font-medium border-none">
            Independent Verification
          </Badge>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900">World-Class Lab Certification</h2>
          <p className="font-sans text-xs text-stone-600 leading-relaxed">
            Every high-value stone in our collection includes an official gemological report detailing exact carat weight, color grade, origin, and treatment status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labPartners.map((lab) => (
            <div key={lab.name} className="bg-white p-5 rounded-xl border border-stone-200/80 space-y-2 font-sans shadow-xs">
              <span className="text-lg font-bold text-stone-900">{lab.name}</span>
              <p className="text-xs font-medium text-stone-500">{lab.fullname}</p>
              <p className="text-xs text-stone-600 pt-1 leading-relaxed">
                {lab.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Showroom & Contact Info */}
      <section className="rounded-2xl border border-stone-200/90 p-8 space-y-6 font-sans">
        <div className="space-y-1">
          <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900">Showroom &amp; Direct Inquiries</h2>
          <p className="text-xs text-stone-500">
            Have questions regarding a specific gemstone or custom order?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-600">
          <div className="space-y-1">
            <p className="font-semibold text-stone-900 text-sm">Private Showrooms</p>
            <p>Colombo &amp; Ratnapura, Sri Lanka</p>
            <p className="text-stone-500">By private appointment only</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-stone-900 text-sm">WhatsApp Support</p>
            <p>Direct access to master gemologists</p>
            <p className="text-stone-500">+94 (77) 123-4567</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-stone-900 text-sm">Global Shipping</p>
            <p>Insured door-to-door express delivery</p>
            <p className="text-stone-500">Pay in LKR or USD</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 pt-4">
        <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900">
          Explore Our Natural Gemstone Collection
        </h2>
        <div className="flex justify-center gap-4">
          <Link
            href="/gems"
            className="inline-flex h-12 items-center justify-center rounded-full bg-stone-900 px-8 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-stone-800 active:scale-95"
          >
            View Available Gemstones
          </Link>
        </div>
      </section>
    </main>
  );
}