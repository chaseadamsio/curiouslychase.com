"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { stages } from "@/utils/content/stages";

export const StageLabel = ({ stage }: { stage: keyof typeof stages }) => {
  return (
    <div
      className={cn(
        "text-xs rounded-full",
        "p-1 px-2",
        stage === "concept"
          ? "bg-tuna-200 text-tuna-950 hover:bg-tuna-300"
          : stage === "researching"
          ? "bg-blue-300 text-blue-950 hover:bg-blue-400"
          : stage === "in_progress"
          ? "bg-yellow-300 text-yellow-950 hover:bg-yellow-400"
          : stage === "draft"
          ? "bg-tuna-200 text-tuna-950 hover:bg-tuna-300"
          : stage === "living_document"
          ? "bg-green-300 text-green-950 hover:bg-green-400"
          : stage === "stale"
          ? "bg-tuna-900 text-tuna-500 hover:bg-tuna-800"
          : "bg-magenta-950 text-magenta-200 hover:bg-magenta-800"
      )}
    >
      <HoverCard>
        <HoverCardTrigger className="cursor-pointer">
          <span>{stages[stage].name}</span>
        </HoverCardTrigger>
        <HoverCardContent>
          <h4 className="text-purple-200 mt-0 text-base font-bold">
            {stages[stage].name}
          </h4>
          <p>{stages[stage].description}</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
