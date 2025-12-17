"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ButtonLink } from "@/components/ui/Button";
import { Menu, X, ChevronDown, Rocket, Shield, LineChart, Code2, Coins, Building2, HelpCircle, FileText } from "lucide-react";

export function MegaMenu() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when clicking outside (not implemented for simplicity in this artifact, but expected in production)

    const menuItems = [
        {
            title: "Solutions",
            icon: <Rocket className="w-5 h-5 text-electric-cyan" />,
            items: [
                { title: "Instant Equity", href: "/vehicle-value", desc: "Unlock verified value in seconds." },
                { title: "Title Loans", href: "/how-it-works", desc: "Texas CAB compliant structures." },
                { title: "Refinance", href: "/calculator", desc: "Lower your current rate today." },
            ],
        },
        {
            title: "Resources",
            icon: <LineChart className="w-5 h-5 text-electric-violet" />,
            items: [
                { title: "Rates & Fees", href: "/rates-fees", desc: "Transparent pricing breakdown." },
                { title: "Calculator", href: "/calculator", desc: "Estimate your payment terms." },
                { title: "API Documentation", href: "/developers", desc: "Build on our financial stack." },
                { title: "Help Center", href: "/help", desc: "24/7 support and guides." },
            ],
        },
        {
            title: "Company",
            icon: <Building2 className="w-5 h-5 text-indigo-400" />,
            items: [
                { title: "About Us", href: "/about", desc: "Our mission and technology." },
                { title: "Careers", href: "/careers", desc: "Join the future of fintech." },
                { title: "Partners", href: "/partners", desc: "Affiliate and B2B programs." },
            ],
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 flex items-center justify-center bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                        <span className="font-bold text-lg select-none">A</span>
                        <div className="absolute inset-0 bg-gradient-to-tr from-electric-cyan/20 to-transparent pointer-events-none" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white group-hover:text-electric-cyan transition-colors">
                        AURA
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {menuItems.map((menu) => (
                        <div
                            key={menu.title}
                            className="relative group"
                            onMouseEnter={() => setActiveSubmenu(menu.title)}
                            onMouseLeave={() => setActiveSubmenu(null)}
                        >
                            <button className="flex items-center gap-1 py-4 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                {menu.title}
                                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeSubmenu === menu.title ? "rotate-180" : "")} />
                            </button>

                            {/* Dropdown */}
                            <div
                                className={cn(
                                    "absolute top-full left-1/2 -translate-x-1/2 pt-4 w-80 transition-all duration-200 origin-top",
                                    activeSubmenu === menu.title ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                                )}
                            >
                                <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl p-4 grid gap-2">
                                    <div className="flex items-center gap-2 px-3 pb-2 mb-2 border-b border-zinc-100 dark:border-zinc-800/50">
                                        {menu.icon}
                                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">{menu.title}</span>
                                    </div>
                                    {menu.items.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="block p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item"
                                        >
                                            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-200 group-hover/item:text-electric-cyan transition-colors">
                                                {item.title}
                                            </div>
                                            <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5 line-clamp-1">
                                                {item.desc}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <ThemeToggle />
                    <Link href="/auth/login" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                        Log In
                    </Link>
                    <ButtonLink href="/start" variant="neon" size="sm">
                        Get Started
                    </ButtonLink>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 lg:hidden">
                    <ThemeToggle />
                    <button onClick={toggleMenu} className="p-2 text-zinc-600 dark:text-zinc-400">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white dark:bg-black overflow-y-auto z-40 border-t border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-6">
                    {menuItems.map((menu) => (
                        <div key={menu.title} className="space-y-3">
                            <div className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-white">
                                {menu.icon}
                                {menu.title}
                            </div>
                            <div className="pl-7 grid gap-3">
                                {menu.items.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-sm text-zinc-600 dark:text-zinc-400"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800 grid gap-4">
                        <ButtonLink href="/auth/login" variant="outline" className="w-full">Log In</ButtonLink>
                        <ButtonLink href="/start" variant="neon" className="w-full">Get Started</ButtonLink>
                    </div>
                </div>
            )}
        </header>
    );
}
