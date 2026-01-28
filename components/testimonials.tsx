"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "VanshaKatha helped me connect with cousins I never knew existed. We recorded hours of stories from my grandmother before she passed. It's the most meaningful digital project I've ever been part of.",
    author: "Priya Mehta",
    role: "Software Engineer, Mumbai",
    avatar: "PM",
  },
  {
    quote:
      "The privacy controls gave us confidence. My family includes members across three countries — we needed something that respected our different comfort levels with sharing personal information.",
    author: "James Okafor",
    role: "Teacher, London",
    avatar: "JO",
  },
  {
    quote:
      "I started with just my parents and grandparents. Six months later, 23 family members are contributing. The story prompts feature was the key — it made people open up in ways a blank form never could.",
    author: "Sarah Chen",
    role: "Designer, Toronto",
    avatar: "SC",
  },
];

export function Testimonials() {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 inline-flex">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
            Stories From Real Families
          </h2>
        </div>

        <Card className="relative">
          <CardContent className="p-8 sm:p-10">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg leading-relaxed text-foreground mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-semibold">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-accent w-6" : "bg-card-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="p-2 rounded-lg border border-card-border hover:bg-muted transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)}
                  className="p-2 rounded-lg border border-card-border hover:bg-muted transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
