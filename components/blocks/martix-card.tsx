import { MatrixRain } from "@/components/ui/matrix-rain";

export const MatrixCard = () => {
  return (
    <div className="relative  flex h-full w-full items-center opacity-60 justify-center overflow-hidden rounded-lg border bg-background">
      <MatrixRain fixedColor="#fff" speed={100} className="absolute left-0.5" />
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-linear-to-b" />
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t" />
    </div>
  );
};
