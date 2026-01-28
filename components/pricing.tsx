import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started with your family story.",
    features: [
      "Up to 50 family members",
      "Basic family tree builder",
      "Story documentation",
      "Photo uploads (5 GB)",
      "Private by default",
    ],
    cta: "Get Started Free",
    variant: "outline" as const,
    highlight: false,
  },
  {
    name: "Family",
    price: "$9",
    per: "/month",
    description: "For families ready to build a comprehensive chronicle.",
    features: [
      "Unlimited family members",
      "Advanced tree with generations",
      "Collaborative editing",
      "Photo & document storage (50 GB)",
      "Voice memo recording",
      "Smart story prompts",
      "Export to PDF & GEDCOM",
    ],
    cta: "Start Family Plan",
    variant: "accent" as const,
    highlight: true,
  },
  {
    name: "Heritage",
    price: "$19",
    per: "/month",
    description: "For families with rich histories spanning many generations.",
    features: [
      "Everything in Family",
      "Unlimited storage",
      "Priority support",
      "Advanced privacy controls",
      "Custom family website",
      "Dedicated family archivist",
      "Annual printed yearbook",
    ],
    cta: "Start Heritage Plan",
    variant: "outline" as const,
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 inline-flex">
            Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Start free and upgrade when you're ready. No hidden fees, cancel
            anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${plan.highlight ? "md:scale-105 md:-translate-y-2" : ""}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <Badge variant="accent" className="text-xs whitespace-nowrap shadow-sm">Most Popular</Badge>
                </div>
              )}
              <Card
                className={`flex flex-col ${
                  plan.highlight ? "border-accent shadow-lg" : ""
                }`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription className="mt-1">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.per && <span className="text-sm text-muted-foreground">{plan.per}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.variant} className="w-full">
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
