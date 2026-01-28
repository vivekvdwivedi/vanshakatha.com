import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const PROMPTS = [
  "What is the story behind our family name?",
  "Where did your parents first meet?",
  "What did life look like in your hometown as a child?",
  "What traditions did your family celebrate?",
  "Tell me about a difficult time your family overcame.",
  "What skills or wisdom were passed down to you?",
];

export function StoryPrompts() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 inline-flex">
            Story Starters
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
            Questions That Unlock
            <br className="hidden sm:block" />
            Meaningful Stories
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Not sure where to start? Use these prompts to begin conversations
            that reveal the richest parts of your family's history.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROMPTS.map((prompt) => (
            <Card
              key={prompt}
              className="p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <CardContent className="p-0 flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5">
                  <MessageCircle className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-200" />
                </div>
                <p className="text-sm text-foreground leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
                  {prompt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
