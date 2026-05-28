import Link from "next/link";
import GlowLinkButton from "@/components/ruixen/glow-link-button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* glitchy 404 */}
      <span className="text-[120px] md:text-[180px] font-bold leading-none tracking-tighter text-white/5 select-none">
        404
      </span>

      {/* content */}
      <div className="relative -mt-16 md:-mt-24 flex flex-col items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
          Lost in the void
        </h1>
        <p className="max-w-sm text-sm text-white/40 leading-relaxed">
          This page drifted beyond the observable universe. It might never have
          existed, or someone moved it without telling the rest of us.
        </p>

        <div className="mt-4">
          <GlowLinkButton label="Take me home 😢" href="/" sound={false} />
        </div>
      </div>

      {/* subtle decoration */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
    </div>
  );
}
