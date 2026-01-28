"use client";

import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { Globe } from "lucide-react";

export function LangSwitcher() {
  const [isHindi, setIsHindi] = React.useState(false);

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <span className={`text-xs font-medium transition-colors ${!isHindi ? "text-foreground" : "text-muted-foreground"}`}>
        EN
      </span>
      <Switch
        checked={isHindi}
        onCheckedChange={setIsHindi}
        aria-label="Toggle language"
      />
      <span className={`text-xs font-medium transition-colors ${isHindi ? "text-foreground" : "text-muted-foreground"}`}>
        HI
      </span>
    </div>
  );
}
