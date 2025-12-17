import { MegaMenu } from "@/components/layout/MegaMenu";
import { Footer } from "@/components/layout/footer";
import type { ReactNode } from "react";

export default function MarketingLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-electric-cyan/20">
            <MegaMenu />
            <main className="flex-1 relative flex flex-col">{children}</main>
            <Footer />
        </div>
    );
}
