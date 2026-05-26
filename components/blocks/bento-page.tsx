import DarkVeil from "@/components/DarkVeil";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento";
import { BadgeMorph } from "../ruixen/badge-morph";
import GlowLinkButton from "../ruixen/glow-link-button";
import { DigitalClock } from "./clock";
import { GlobeCard } from "./globe-card";
import { MatrixCard } from "./martix-card";
import { ReviewMarquee } from "./review-marquee";
import { SocialMarquee } from "./social-marquee";

export function BentoPage() {
  return (
    <div className="flex h-full w-full items-center justify-center max-w-6xl">
      <BentoGrid cols={{ base: 2, md: 3, lg: 4 }} rowHeight="100px">
        {/* <BentoGridItem colSpan={4}> Tabs</BentoGridItem> */}

        <BentoGridItem
          colSpan={2}
          rowSpan={4}
          className="flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <DarkVeil color="#00ff33" speed={2} warpAmount={0.5} />
          </div>
          {/* <DotPattern className="absolute inset-0 z-10" /> */}

          {/* badge */}
          <div className="relative mb-6">
            <BadgeMorph status="loading" label="Building" />
          </div>

          {/* title */}
          <h1 className="pointer-events-none relative text-white text-center text-6xl leading-none font-semibold tracking-tighter">
            Hi, I&rsquo;m <br /> Can Altun
          </h1>

          {/* subtitle */}
          <p className="relative mt-4 max-w-md text-center text-sm text-white/60 dark:text-white/50">
            A designer &amp; developer crafting thoughtful digital experiences
            with motion, glass, and clean typography.
          </p>

          {/* actions */}
          <div className="relative mt-8">
            <GlowLinkButton label="View my works" href="/works" sound={false} />
          </div>
          <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-linear-to-b" />
          <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t" />
        </BentoGridItem>

        <BentoGridItem colSpan={1} rowSpan={2}>
          <GlobeCard text={"World Wide"} markerColor="#007517" />
        </BentoGridItem>

        <BentoGridItem colSpan={1} rowSpan={2}>
          <MatrixCard />
        </BentoGridItem>

        <BentoGridItem colSpan={2} rowSpan={2} className="overflow-hidden">
          <ReviewMarquee />
        </BentoGridItem>

        <BentoGridItem
          colSpan={2}
          className="flex items-center justify-center animate-pulse"
        >
          Work in progress..
        </BentoGridItem>
        <BentoGridItem>
          <SocialMarquee />
        </BentoGridItem>
        <BentoGridItem>
          <DigitalClock />
        </BentoGridItem>

        {/* <BentoGridItem colSpan={4} className="relative flex items-center">
          <Footer></Footer>
        </BentoGridItem> */}
      </BentoGrid>
    </div>
  );
}
