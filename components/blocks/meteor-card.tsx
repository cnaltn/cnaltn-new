import { Meteors } from "@/components/ui/meteors";

export function MeteorCard() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
      <Meteors number={20} />
      <span className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
        DESIGN WITHOUT LIMITSs
      </span>
    </div>
  );
}
