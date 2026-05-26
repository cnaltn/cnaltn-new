import { Globe } from "../ui/globe";

export function GlobeCard({
  text,
  markerColor,
}: {
  text: string;
  /** Hex renk kodu, örn: "#ff6600" */
  markerColor?: string;
}) {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg   ">
      <span className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
        {text}
      </span>
      <Globe className="top-28 opacity-80" markerColor={markerColor} />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-linear-to-b" />
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t" />
    </div>
  );
}
