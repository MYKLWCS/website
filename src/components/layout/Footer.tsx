"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10">
                <span className="text-xl font-bold text-white">$</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white tracking-tight">DOLLAR</span>
                <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">LOANS</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm mb-6">
              The modern way to access vehicle equity. Instant decisions, transparent fees, and a completely digital experience tailored for the future.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/50 transition-colors cursor-pointer" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-4">
              {['How It Works', 'Calculator', 'Rates & Fees', 'Vehicle Value'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Support</h4>
            <ul className="space-y-4">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2025 Dollar Loans. All rights reserved. Dollar Loans is a licensed Credit Access Business (CAB).
          </p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-xs text-gray-400">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
