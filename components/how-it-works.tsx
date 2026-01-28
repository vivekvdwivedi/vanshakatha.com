import { Badge } from "@/components/ui/badge";
import { TreePine, Users, BookOpen } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: TreePine,
    title: "Create Your Tree",
    description:
      "Start with yourself and work outward. Add parents, grandparents, siblings — at your own pace. Import from GEDCOM files or start fresh.",
  },
  {
    number: "02",
    icon: Users,
    title: "Invite Your Family",
    description:
      "Share secure links with relatives. They can add their branch, upload photos, and contribute their own memories and stories.",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Document the Stories",
    description:
      "Record interviews, write narratives, attach documents. Turn bare names and dates into a rich, living family history.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 inline-flex">
            How It Works
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
            Three Simple Steps to
            <br className="hidden sm:block" />
            Your Family's Story
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connector lines (desktop only) — drawn behind the grid */}
          <div className="hidden md:flex absolute top-8 left-0 right-0 justify-around px-[calc(50%/3)] pointer-events-none">
            <div className="flex-1 mx-8 h-px bg-card-border mt-0" />
            <div className="flex-1 mx-8 h-px bg-card-border mt-0" />
          </div>

          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-accent flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="h-6 w-6 text-accent" />
                </div>

                {/* Step number */}
                <span className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">
                  Step {step.number}
                </span>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
