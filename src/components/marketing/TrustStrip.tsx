import { Badge } from "@/components/ui/Badge";

export function TrustStrip() {
  return (
    <div className="grid gap-4 rounded-2xl border border-border/50 bg-white/80 backdrop-blur-sm p-8 md:grid-cols-4 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="space-y-2">
        <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center mb-2">
          <div className="w-3 h-3 rounded-full bg-brand"></div>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Compliance</p>
        <p className="text-sm font-semibold">CAB-first disclosure</p>
      </div>
      <div className="space-y-2">
        <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center mb-2">
          <div className="w-3 h-3 rounded-full bg-brand"></div>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Security</p>
        <p className="text-sm font-semibold">Encrypted data</p>
      </div>
      <div className="space-y-2">
        <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center mb-2">
          <div className="w-3 h-3 rounded-full bg-brand"></div>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Speed</p>
        <p className="text-sm font-semibold">Fast workflow</p>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center mb-2">
            <div className="w-3 h-3 rounded-full bg-brand"></div>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand">Transparency</p>
          <p className="text-sm font-semibold">Plain language</p>
        </div>
        <Badge variant="brand" className="mt-2">Texas</Badge>
      </div>
    </div>
  );
}

