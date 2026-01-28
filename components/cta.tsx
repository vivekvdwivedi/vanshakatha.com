import { Button } from "@/components/ui/button";
import { ArrowRight, TreePine } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-card to-muted border border-card-border rounded-2xl p-10 sm:p-16">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent mb-6">
          <TreePine className="h-6 w-6" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Ready to Start Your Family's Story?
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Join thousands of families who are already preserving their history.
          It takes just a few minutes to get started.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" variant="accent" className="w-full sm:w-auto">
            Begin for Free
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
