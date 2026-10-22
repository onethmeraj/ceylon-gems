import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-stone-50 dark:bg-stone-900/50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-base font-semibold">Ceylon Gems</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Premium, ethically mined, and lab-certified Sri Lankan gemstones shipped globally.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-semibold text-foreground">Collection</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/gems?type=Blue%20Sapphire" className="hover:text-foreground">Blue Sapphires</Link></li>
              <li><Link href="/gems?type=Yellow%20Sapphire" className="hover:text-foreground">Yellow Sapphires</Link></li>
              <li><Link href="/gems?type=Padparadscha" className="hover:text-foreground">Padparadscha</Link></li>
              <li><Link href="/gems?type=Ruby" className="hover:text-foreground">Rubies</Link></li>
            </ul>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-semibold text-foreground">Trust & Verification</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>GIA Certified Stones</li>
              <li>GUILD & CGL Lab Reports</li>
              <li>Direct Sri Lankan Provenance</li> 
            </ul>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-semibold text-foreground">Currency & Shipping</h4>
            <p className="text-muted-foreground">
              All listed prices are in Sri Lankan Rupees (LKR). Local and international shipping available.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-xs text-muted-foreground">
          © 2026 Ceylon Gems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}