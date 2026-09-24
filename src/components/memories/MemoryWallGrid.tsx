import Image from "next/image";
import type { Memory } from "@/types";
import RetroCard from "@/components/ui/RetroCard";

export default function MemoryWallGrid({ memories }: { memories: Memory[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {memories.map((memory) => (
        <RetroCard key={memory.id} className="flex flex-col gap-4 p-6">
          {memory.photo && (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-cream">
              <Image
                src={memory.photo}
                alt={`Photo shared with ${memory.name}'s memory`}
                fill
                className="object-contain p-4"
              />
            </div>
          )}
          <p className="text-chocolate/85">&ldquo;{memory.memoryText}&rdquo;</p>
          <p className="mt-auto font-display text-sm text-caramel">
            — {memory.name}
          </p>
        </RetroCard>
      ))}
    </div>
  );
}
