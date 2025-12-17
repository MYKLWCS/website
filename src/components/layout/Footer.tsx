import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo & Social */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-rose-500"></div>
                </div>
                <span className="text-xl font-bold tracking-tighter">Aura</span>
              </Link>
              <p className="text-sm text-grey-400 max-w-xs">
                The future of asset-backed lending.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/how-it-works" className="text-grey-500 hover:text-black transition-colors">How It Works</Link></li>
                <li><Link href="/get-offer" className="text-grey-500 hover:text-black transition-colors">Get an Offer</Link></li>
                <li><Link href="/security" className="text-grey-500 hover:text-black transition-colors">Security</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="text-grey-500 hover:text-black transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="text-grey-500 hover:text-black transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-grey-500 hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/terms" className="text-grey-500 hover:text-black transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-grey-500 hover:text-black transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border py-6">
          <p className="text-sm text-center text-grey-400">&copy; {new Date().getFullYear()} Aura Financial. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
