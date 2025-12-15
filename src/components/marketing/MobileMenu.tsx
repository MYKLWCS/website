"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2
      }
    })
  };

  const navLinks = [
    { href: "/how-it-works", label: "How it works" },
    { href: "/cab-model-explained", label: "CAB model" },
    { href: "/calculator", label: "Calculator" },
    { href: "/rates-fees", label: "Rates & fees" },
    { href: "/faq", label: "FAQ" },
    { href: "/eligibility", label: "Eligibility" },
    { href: "/reviews", label: "Reviews" },
    { href: "/security-trust", label: "Security" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="h-0.5 w-6 bg-fg transition-all"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="h-0.5 w-6 bg-fg transition-all"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="h-0.5 w-6 bg-fg transition-all"
        />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm md:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed right-0 top-0 z-50 h-full w-80 max-w-full overflow-y-auto border-l border-border/60 bg-bg shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-6">
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="mb-8 self-end p-2"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6 text-fg"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div key={link.href} custom={i} variants={linkVariants}>
                    <Link
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-fg hover:bg-panel/50"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA Buttons */}
              <motion.div
                custom={navLinks.length}
                variants={linkVariants}
                className="mt-8 flex flex-col gap-3"
              >
                <ButtonLink
                  href="/auth/login"
                  variant="secondary"
                  className="w-full justify-center"
                  onClick={toggleMenu}
                >
                  Login
                </ButtonLink>
                <ButtonLink
                  href="/#prequal"
                  className="w-full justify-center"
                  onClick={toggleMenu}
                >
                  Check Your Estimate
                </ButtonLink>
              </motion.div>

              {/* Footer Links */}
              <motion.div
                custom={navLinks.length + 1}
                variants={linkVariants}
                className="mt-8 border-t border-border/40 pt-6"
              >
                <div className="flex flex-col gap-2 text-sm text-muted">
                  <Link href="/legal/terms" className="hover:text-fg" onClick={toggleMenu}>
                    Terms of Service
                  </Link>
                  <Link href="/legal/privacy" className="hover:text-fg" onClick={toggleMenu}>
                    Privacy Policy
                  </Link>
                  <Link href="/legal/cab-disclosures" className="hover:text-fg" onClick={toggleMenu}>
                    CAB Disclosures
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
