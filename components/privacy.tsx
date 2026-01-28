import { Badge } from "@/components/ui/badge";
import { Lock, Shield, Eye, Server } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Your data is encrypted before it leaves your device and can only be decrypted by authorized family members.",
  },
  {
    icon: Shield,
    title: "SOC 2 Compliant",
    description: "We meet industry-leading security standards. Regular third-party audits ensure we maintain them.",
  },
  {
    icon: Eye,
    title: "Granular Privacy Controls",
    description: "Decide exactly who sees what. Mark individual stories, photos, or branches as private or shared.",
  },
  {
    icon: Server,
    title: "Data Sovereignty",
    description: "Choose where your data is stored. Export your entire family tree at any time in standard formats.",
  },
];

export function Privacy() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="green" className="mb-4 inline-flex">
            Privacy & Security
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
            Your Family's Data Stays
            <br className="hidden sm:block" />
            Under Your Control
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We built VanshaKatha with privacy at its core. Family histories
            are deeply personal — your security is non-negotiable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
