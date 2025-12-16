import { Accordion } from "@/components/ui/Accordion";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PrequalMiniWizard } from "@/components/prequal/PrequalMiniWizard";

// --- Nano Banana Image Prompts ---
// 1. Hero Image: A stunning, abstract image of a gold liquid swirling and forming the shape of a high-end sports car. The background is a dark, rich brown.
//    Prompt: "Abstract, 8k, hyper-realistic, liquid gold forming the silhouette of a luxury sports car, dark brown background, cinematic lighting, dramatic shadows"
// 2. Feature Icons: A set of 3 icons in a gold and pink style: (1) A stopwatch with wings, (2) A shield with a dollar sign, (3) A car with an upward-pointing arrow.
//    Prompt: "3 minimalist icons, gold and pink on a dark brown background: (1) A stopwatch with wings, (2) A shield with a dollar sign, (3) A car with an upward-pointing arrow. Clean, vector style."

export function HomePage() {
  return (
    <main>
      {/* --- Hero Section --- */}
      <Section className="relative pt-48 pb-32 text-center text-white bg-brown-900">
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900 via-brown-800 to-brown-900 opacity-80"></div>
        {/* Placeholder for Nano Banana Image 1 */}
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("[Nano Banana: Hero Image]")'}}></div>
        <Container className="relative">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-shadow-lg">
            Your Vehicle's Hidden Value, Unleashed.
          </h1>
          <p className="text-xl md:text-2xl text-gold-100/80 leading-relaxed max-w-3xl mx-auto mb-10">
            Access the equity in your car without selling it. Gilded Finance offers a seamless, secure, and sophisticated way to get the cash you need.
          </p>
          <Button href="#prequal" size="xl" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-2xl transform hover:scale-105">
            Unlock Your Cash Offer
          </Button>
        </Container>
      </Section>

      {/* --- Features Section --- */}
      <Section className="py-24 md:py-32">
        <Container>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              ["Speed", "From application to cash in as little as 24 hours."],
              ["Security", "Bank-level security and data protection."],
              ["Value", "Get the most from your vehicle's equity."],
            ].map(([title, desc], i) => (
              <div key={i} className="p-8">
                {/* Placeholder for Nano Banana Image 2 */}
                <div className="w-24 h-24 rounded-full bg-gold-100 mx-auto mb-6 flex items-center justify-center">
                  <p className="text-gold-500">[Icon {i+1}]</p>
                </div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* --- Prequalification Section --- */}
      <Section id="prequal" className="scroll-mt-20 py-24 md:py-32 bg-panel">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-4">See Your Offer</h2>
            <p className="text-xl text-muted mb-12">
              No commitment, no impact to your credit score. Just a real offer in real time.
            </p>
          </div>
          <PrequalMiniWizard />
        </Container>
      </Section>

      {/* --- FAQ Section --- */}
      <Section className="py-24 md:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion
              items={[
                {
                  q: "How is Gilded Finance different?",
                  a: "We combine technology, deep automotive expertise, and a commitment to customer service to provide a seamless and sophisticated experience. We see your vehicle not just as a car, but as a valuable asset.",
                },
                {
                  q: "What do I need to apply?",
                  a: "You'll need a valid driver's license, proof of income, and your vehicle's title. Our secure online portal makes it easy to upload everything in minutes.",
                },
                {
                  q: "Can I still drive my car?",
                  a: "Yes! A title loan allows you to use your car's title as collateral, so you can get the cash you need and keep driving your car.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
