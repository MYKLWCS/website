import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="bg-brown-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Logo & Mission */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-700">
                  <span className="text-lg font-bold text-white">$</span>
                </div>
                <span className="text-xl font-bold">Gilded Finance</span>
              </Link>
              <p className="text-gold-100/50 max-w-sm">
                Unlocking the potential of your assets with speed, simplicity, and style.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300/80 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gold-100/70 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-gold-100/70 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="text-gold-100/70 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300/80 mb-4">Support</h3>
              <ul className="space-y-3">
                <li><Link href="/faq" className="text-gold-100/70 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="text-gold-100/70 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/terms" className="text-gold-100/70 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gold-800/20 py-6 text-center">
          <p className="text-sm text-gold-100/50">&copy; {new Date().getFullYear()} Gilded Finance. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
