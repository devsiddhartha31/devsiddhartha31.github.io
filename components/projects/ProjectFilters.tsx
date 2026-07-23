"use client";

import Button from "@/components/ui/Button";
import { cn } from "@/libs/utils";

interface Props {
  filters: string[];
  active: string;
  onChange: (filter: string) => void;
}

const formatLabel = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export default function ProjectFilters({
  filters,
  active,
  onChange,
}: Props) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <Button
          key={filter}
          onClick={() => onChange(filter)}
          variant={active === filter ? "pill" : "secondary"}
          size="sm"
          className={cn(
            "rounded-full",
            active && "shadow-none"
          )}
        >
          {formatLabel(filter)}
        </Button>
      ))}
    </div>
  );
}