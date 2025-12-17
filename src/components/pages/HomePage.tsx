"use client";

import { Button, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ArrowRight, Zap, Shield, Globe, Users, TrendingUp, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

// --- Nano Banana Image Prompts ---
// 1. Hero Illustration: A highly detailed, isometric 3D illustration of a futuristic digital city or bank vault, glowing with cyan and violet neon lines on a dark background. Floating coins or digital assets.
//    Prompt: "isometric 3d illustration, futuristic digital bank vault, glowing neon cyan and violet lines, floating digital assets, dark background, high tech, unreal engine 5 render, 8k"

function LiveTicker() {
    const [rate, setRate] = useState(13.4);

    useEffect(() => {
        const interval = setInterval(() => {
            setRate(prev => prev + (Math.random() - 0.5) * 0.1);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>LIVE APR INDEX: {rate.toFixed(2)}%</span>
            <span className="text-green-500 text-[10px]">▲ 0.05%</span>
        </div>
    );
}

function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="h-14 w-14 rounded-full bg-electric-cyan text-black hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center justify-center"
            >
                <MessageSquare className="w-6 h-6 fill-current" />
            </button>

            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 md:w-96 h-[500px] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in origin-bottom-right">
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="font-bold text-sm">Aura Assistant</span>
                        </div>
                        <span className="text-xs text-zinc-500">Online</span>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                                <Zap className="w-4 h-4 text-electric-violet" />
                            </div>
                            <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-2xl rounded-tl-none text-sm text-zinc-600 dark:text-zinc-300">
                                Hello! I can help you unlock your vehicle's equity. What brings you here today?
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="w-full bg-transparent text-sm focus:outline-none text-zinc-900 dark:text-white"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export function HomePage() {
    return (
        <div className="overflow-hidden">
            <ChatBot />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-grid-zinc-900/5 dark:bg-grid-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

                <Container className="relative z-20">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
                            <LiveTicker />
                            <div className="px-3 py-1 rounded-full border border-electric-violet/30 bg-electric-violet/10 text-electric-violet text-xs font-bold tracking-wide uppercase">
                                New v2.0 Protocol Live
                            </div>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] animate-fade-up">
                            LIQUIDITY <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-electric-violet drop-shadow-sm">
                                UNLOCKED.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light animate-fade-up style={{animationDelay: '100ms'}}">
                            The world's first decentralized-style vehicle equity platform.
                            Instant access. Zero friction. Bank-grade security.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up style={{animationDelay: '200ms'}}">
                            <Button href="#start" variant="neon" size="xl" className="shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                                Start Application <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <ButtonLink href="/how-it-works" variant="outline" size="xl" className="border-zinc-300 dark:border-zinc-700">
                                View Protocol
                            </ButtonLink>
                        </div>
                    </div>
                </Container>

                {/* 3D Illustration Placeholder (Right Side) */}
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24 xl:right-0 w-[800px] h-[800px] z-0 opacity-50 dark:opacity-80 pointer-events-none">
                    {/* This would be a 3D spline or transparent PNG */}
                    <div className="w-full h-full bg-gradient-radial from-electric-cyan/20 to-transparent blur-3xl rounded-full animate-slow-pulse" />
                </div>
            </section>

            {/* --- STATS TICKER --- */}
            <div className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200 dark:divide-zinc-800">
                        {[
                            { label: "Total Liquidity", value: "$42M+" },
                            { label: "Active Users", value: "12,400" },
                            { label: "Avg. Approval", value: "4.2s" },
                            { label: "Security", value: "AES-256" },
                        ].map((stat, i) => (
                            <div key={i} className="py-6 px-4 flex flex-col items-center justify-center text-center">
                                <span className="text-2xl md:text-3xl font-black tracking-tight">{stat.value}</span>
                                <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* --- FEATURE GRID --- */}
            <Section className="relative">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Engineered for Humans.</h2>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400">
                            Forget outdated loan offices. Aura brings institution-grade financial tools to your pocket.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Zap,
                                title: "Flash Transfer",
                                desc: "Funds settle in your account instantly via RTP networks.",
                                color: "text-yellow-400"
                            },
                            {
                                icon: Shield,
                                title: "Vault Security",
                                desc: "Your data is encrypted and never sold to third parties.",
                                color: "text-electric-cyan"
                            },
                            {
                                icon: Globe,
                                title: "Works Everywhere",
                                desc: "Access your dashboard from any device, anywhere in Texas.",
                                color: "text-electric-violet"
                            },
                            {
                                icon: TrendingUp,
                                title: "Dynamic Rates",
                                desc: "Our AI adjusts rates in real-time based on market conditions.",
                                color: "text-green-400"
                            },
                            {
                                icon: Users,
                                title: "Peerless Support",
                                desc: "24/7 dedicated concierge for all Aura members.",
                                color: "text-pink-400"
                            },
                            {
                                icon: MessageSquare,
                                title: "Smart Alerts",
                                desc: "Get notified instantly about payment milestones.",
                                color: "text-orange-400"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group relative p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:hover:shadow-zinc-900/50">
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-zinc-50 dark:to-zinc-800/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className={`w-6 h-6 ${item.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* --- DASHBOARD PREVIEW --- */}
            <Section className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <Container>
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                                Control Center <br />
                                <span className="text-electric-cyan">Pro.</span>
                            </h2>
                            <p className="text-lg text-zinc-500 dark:text-zinc-400">
                                Manage your loan with a professional-grade dashboard. Make payments, view amortization schedules, and track your equity in real-time.
                            </p>

                            <div className="space-y-4">
                                {["Real-time Equity Tracking", "One-tap Payoffs", "Document Vault"].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs font-bold">✓</div>
                                        <span className="font-semibold">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <Button variant="outline" size="lg">Explore Dashboard</Button>
                        </div>

                        <div className="flex-1 relative">
                            {/* Abstract Representation of Dashboard */}
                            <div className="relative z-10 w-full aspect-[4/3] bg-zinc-900 rounded-3xl border border-zinc-700 shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-12 bg-zinc-800 border-b border-zinc-700 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                {/* Content mockup */}
                                <div className="p-8 space-y-6">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="text-zinc-500 text-xs uppercase font-bold tracking-wider mb-1">Total Balance</div>
                                            <div className="text-4xl font-mono text-white">$4,250.00</div>
                                        </div>
                                        <div className="text-green-500 font-mono text-sm">+2.4% Equity</div>
                                    </div>
                                    {/* Fake Graph */}
                                    <div className="w-full h-32 flex items-end justify-between gap-1">
                                        {[40, 60, 45, 70, 50, 80, 65, 90, 75, 100].map((h, i) => (
                                            <div key={i} className="w-full bg-electric-cyan/20 hover:bg-electric-cyan transition-colors rounded-t-sm" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Glow effects */}
                            <div className="absolute -inset-10 bg-electric-cyan/20 blur-3xl rounded-full -z-10" />
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
