import { cn } from "../lib/utils";
import { StarBorder } from "../components/ui/star-border";
import React from "react";

export default function StarBorderDemo({ children }) {
  return (
    <div className="space-y-8">
      <StarBorder className="dark">
        <p className="text-xl font-normal">{children}</p>
      </StarBorder>
    </div>
  );
}
