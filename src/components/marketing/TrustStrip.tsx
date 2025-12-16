import { Badge } from "@/components/ui/Badge";

export function TrustStrip() {
  return (
    <div className="grid gap-4 rounded-2xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 md:grid-cols-4 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="space-y-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-brand2 flex items-center justify-center mb-3 shadow-md">
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Compliance</p>
        <p className="text-sm font-bold text-fg">CAB-first disclosure</p>
      </div>
      <div className="space-y-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-brand2 flex items-center justify-center mb-3 shadow-md">
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Security</p>
        <p className="text-sm font-bold text-fg">Encrypted data</p>
      </div>
      <div className="space-y-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-brand2 flex items-center justify-center mb-3 shadow-md">
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Speed</p>
        <p className="text-sm font-bold text-fg">Fast workflow</p>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-brand2 flex items-center justify-center mb-3 shadow-md">
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand">Transparency</p>
          <p className="text-sm font-bold text-fg">Plain language</p>
        </div>
        <Badge variant="brand" className="mt-2">Texas</Badge>
      </div>
    </div>
  );
}

