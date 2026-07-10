import { about } from "@/data/about";
import ImpactCard from "./ImpactCard";

export default function ImpactGrid() {
  return (
    <div className="mt-16 grid auto-rows-[240px] gap-6 lg:grid-cols-3">

      {about.highlights.map((item) => (
        <ImpactCard
          key={item.id}
          item={item}
        />
      ))}

    </div>
  );
}