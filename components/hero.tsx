import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TreePine, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <Badge variant="accent" className="mb-6 inline-flex">
          <TreePine className="h-3.5 w-3.5 mr-1.5" />
          Your Family's Living Chronicle
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6" style={{ fontFamily: "var(--font-serif)" }}>
          Every Family Has a
          <br className="hidden sm:block" />
          <span className="text-accent">History Worth</span>
          <br className="hidden sm:block" />
          Preserving
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Build your family tree, document the stories behind the names, and
          create a private space where your family's memories live together —
          beautifully and securely.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" variant="accent" className="w-full sm:w-auto">
            Start Your Family Story
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            <BookOpen className="h-4 w-4 mr-1" />
            Explore Features
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-secondary inline-block"></span>
            Free to start
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-secondary inline-block"></span>
            End-to-end encrypted
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-secondary inline-block"></span>
            No ads, ever
          </span>
        </div>
      </div>
    </section>
  );
}
