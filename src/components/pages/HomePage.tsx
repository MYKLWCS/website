import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PrequalMiniWizard } from "@/components/prequal/PrequalMiniWizard";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export function HomePage() {
  return (
    <main className="bg-black text-white selection:bg-primary/30">
        
      {/* --- HERO SECTION --- */}
      <Section className="relative pt-32 pb-40 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-40 pointer-events-none mix-blend-screen animate-pulse" />
        <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full opacity-30 pointer-events-none mix-blend-screen" />

        <Container className="relative z-10 flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">V2.0 Protocol Online</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent drop-shadow-2xl">
                LIQUIDITY <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AT LIGHTSPEED</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Unlock the latent equity in your vehicle with a fully digital, specialized lending platform. 
                Zero friction. Instant verification.
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Button href="/dashboard" variant="neon" size="xl" className="shadow-[0_0_40px_rgba(0,243,255,0.4)] hover:shadow-[0_0_60px_rgba(0,243,255,0.6)] transition-shadow">
                    Get Instant Access
                </Button>
                <Button href="#how-it-works" variant="outline" size="xl" className="border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10">
                    Explore Protocol
                </Button>
            </div>

            {/* Hero Graphic */}
            <div className="mt-24 relative w-full max-w-5xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20"></div>
                <div className="relative rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-2 md:p-4 overflow-hidden shadow-2xl">
                    {/* Mock Dashboard UI */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-white/5 rounded-xl p-6 bg-zinc-900/50">
                        <div className="space-y-2">
                             <div className="h-2 w-20 bg-zinc-700/50 rounded animate-pulse"/>
                             <div className="h-8 w-32 bg-zinc-700/50 rounded animate-pulse"/>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                             <div className="h-32 w-full bg-zinc-800/50 rounded-lg border border-white/5 flex items-center justify-center">
                                <span className="text-zinc-600 font-mono text-xs">ENCRYPTED_DATA_STREAM // VISUALIZATION</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
      </Section>

      {/* --- FEATURES GRID --- */}
      <Section id="how-it-works" className="py-32 border-t border-white/5 relative bg-zinc-950">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <Container className="relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">SYSTEM ARCHITECTURE</h2>
                <p className="text-zinc-500">Engineered for speed, security, and transparency.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                    icon="⚡" 
                    title="Real-Time Decisioning" 
                    desc="Our algorithmic underwriting engine processes data points in milliseconds to generate accurate equity offers."
                />
                <FeatureCard 
                    icon="🛡️" 
                    title="Military-Grade Security" 
                    desc="End-to-end encryption ensures your personal and financial data remains hermetically sealed."
                />
                <FeatureCard 
                    icon="💠" 
                    title="Blockchain Transparent" 
                    desc="Every transaction is immutable and verifiable. We prioritize absolute clarity in terms and rates."
                />
            </div>
        </Container>
      </Section>

      {/* --- PREQUAL MINI WIZARD SECTION --- */}
      <Section className="py-32 border-t border-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
          
          <Container className="relative z-10">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white">
                        INITIALIZE <br/> 
                        <span className="text-primary">YOUR OFFER</span>
                    </h2>
                    <p className="text-lg text-zinc-400 mb-8 max-w-md">
                        Input your vehicle details. Our system will triangulate current market value and extend a preliminary credit offer.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {['No Hard Credit Inquiry', 'Instant 256-bit Valuation', 'Funds in < 24 Hours'].map(item => (
                            <li key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-300">
                                <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/20 text-primary text-[10px]">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-secondary to-primary rounded-2xl blur opacity-30 animate-shimmer"></div>
                    <div className="relative bg-black border border-white/10 rounded-2xl p-1 shadow-2xl">
                         {/* We wrap the wizard in a distinct container */}
                         <div className="bg-zinc-900/90 rounded-xl p-6 md:p-8 backdrop-blur-md">
                            <PrequalMiniWizard />
                         </div>
                    </div>
                </div>
             </div>
          </Container>
      </Section>

    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
    return (
        <div className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
            <div className="h-14 w-14 rounded-xl bg-black border border-white/10 flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform group-hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
                {desc}
            </p>
        </div>
    )
}
