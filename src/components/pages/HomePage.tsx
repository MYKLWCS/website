import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PrequalMiniWizard } from "@/components/prequal/PrequalMiniWizard";

// --- Nano Banana Image Prompts ---
// 1. Hero Background: An abstract, ethereal 8k image with glowing, geometric lines in rose and gold on a light beige background. It should feel like a futuristic circuit board.
//    Prompt: "8k, abstract, ethereal, glowing geometric lines, rose and gold, light beige background, futuristic circuit board, minimalist, clean"
// 2. Feature Icons: A set of 3 icons in a rose and gold gradient on a white background: (1) A lightning bolt, (2) A fingerprint scanner, (3) A rising chart arrow.
//    Prompt: "3 minimalist icons, rose and gold gradient on a white background: (1) lightning bolt, (2) fingerprint scanner, (3) rising chart arrow. 3D, glowing, clean."

export function HomePage() {
  return (
    <main className="bg-beige">
      {/* --- Hero Section --- */}
      <Section className="relative pt-48 pb-32 text-center">
        {/* Placeholder for Nano Banana Image 1 */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url("[Nano Banana: Hero Background]")'}}></div>
        <Container className="relative">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4">
            Unlock Your Car's <span className="gradient-text">Aura</span>.
          </h1>
          <p className="text-xl md:text-2xl text-grey-500 leading-relaxed max-w-3xl mx-auto mb-10">
            Instantly access the hidden value of your vehicle with a process that is as seamless and sophisticated as our technology.
          </p>
          <Button href="#prequal" size="xl" className="bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-glow-rose transform hover:scale-105">
            Activate Your Offer
          </Button>
        </Container>
      </Section>

      {/* --- Features Section --- */}
      <Section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Instant Offers", "Our AI-powered engine gives you a real offer in seconds."],
              ["Secure & Private", "End-to-end encryption and bank-level security."],
              ["Maximum Value", "We find the highest possible value for your vehicle."],
            ].map(([title, desc], i) => (
              <div key={i} className="p-8 text-center">
                 {/* Placeholder for Nano Banana Image 2 */}
                 <div className="w-24 h-24 rounded-2xl bg-white shadow-lg mx-auto mb-6 flex items-center justify-center">
                   <p className="text-rose-500">[Icon {i+1}]</p>
                 </div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-grey-500">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* --- Prequalification Section --- */}
      <Section id="prequal" className="scroll-mt-20 py-24 md:py-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-4">Check Your Rate</h2>
            <p className="text-lg text-grey-500 mb-12">
             See your personalized offer with no commitment and no impact on your credit score.
            </p>
          </div>
          <PrequalMiniWizard />
        </Container>
      </Section>

      {/* --- FAQ Section --- */}
      <Section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">How It Works</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion
              items={[
                {
                  q: "What makes Aura different?",
                  a: "Aura uses cutting-edge technology to provide a faster, more transparent, and more secure way to unlock the equity in your vehicle. We treat your car like the high-value asset it is.",
                },
                {
                  q: "How long does the process take?",
                  a: "From starting your application to receiving your funds, the entire process can take as little as a few hours. Our digital-first approach eliminates unnecessary paperwork and delays.",
                },
                {
                  q: "Is my data secure?",
                  a: "Absolutely. We use bank-level security protocols and end-to-end encryption to protect your personal information. Your privacy is our top priority.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
