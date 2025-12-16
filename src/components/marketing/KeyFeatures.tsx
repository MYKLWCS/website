"use client";

const features = [
  {
    name: "Effortless Application",
    description:
      "Our streamlined online application takes just minutes to complete. We have removed all the friction from the process.",
  },
  {
    name: "Bank-Level Security",
    description:
      "Your data is protected with the same encryption standards used by major financial institutions. Your privacy is our priority.",
  },
  {
    name: "Rapid Funding",
    description:
      "Once approved, you will receive your funds in as little as one business day. No more waiting.",
  },
];

export function KeyFeatures() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {features.map((feature, i) => (
        <div key={i} className="p-8 border border-border/50 rounded-2xl bg-panel/50">
          <h3 className="text-xl font-bold mb-3">{feature.name}</h3>
          <p className="text-muted leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
