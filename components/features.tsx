import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TreePine, BookOpen, Users, Lock, Heart, Search } from "lucide-react";

const FEATURES = [
  {
    icon: TreePine,
    title: "Visual Family Tree",
    description:
      "Build an interactive tree that maps out your lineage across generations. Add photos, dates, and relationships with ease.",
    color: "text-accent-secondary",
    bg: "bg-accent-secondary/10",
  },
  {
    icon: BookOpen,
    title: "Story Documentation",
    description:
      "Capture the stories behind every name in your tree. Record interviews, write narratives, and attach photos and documents.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Users,
    title: "Family Collaboration",
    description:
      "Invite relatives to contribute their memories, correct details, and help build a shared understanding of your heritage.",
    color: "text-accent-secondary",
    bg: "bg-accent-secondary/10",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "Your family's data is encrypted and stored securely. You control who sees what — granular permissions at every level.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Heart,
    title: "Memory Preservation",
    description:
      "Record voice memos, attach scanned documents, and ensure that precious memories aren't lost to time.",
    color: "text-accent-secondary",
    bg: "bg-accent-secondary/10",
  },
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Find any person, story, or document instantly. Full-text search across your entire family chronicle.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 inline-flex">
            What We Offer
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
            Everything You Need to
            <br className="hidden sm:block" />
            Preserve Your Legacy
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A comprehensive set of tools designed to make family history
            documentation feel natural and meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <CardContent className="p-0">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} ${feature.color} mb-4`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
