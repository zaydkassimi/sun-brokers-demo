import type { Property } from "@/types";
import { PropertyCard } from "./PropertyCard";

type PropertyGridProps = {
  properties: Property[];
  priorityCount?: number;
};

export function PropertyGrid({ properties, priorityCount = 0 }: PropertyGridProps) {
  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
      {properties.map((property, index) => (
        <PropertyCard key={property.id} property={property} priority={index < priorityCount} />
      ))}
    </div>
  );
}
