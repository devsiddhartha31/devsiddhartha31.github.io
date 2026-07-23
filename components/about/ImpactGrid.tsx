import { about } from "@/data/about";
import ImpactCard from "./ImpactCard";

export default function ImpactGrid() {
  return (
    <div className="mt-16 grid gap-6 grid-cols-2 md:grid-cols-3">

      {about.highlights.map((item) => (
        <ImpactCard
          key={item.id}
          item={item}
        />
      ))}

    </div>
  );
}