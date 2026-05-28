import DarkVeil from "@/components/DarkVeil";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento";
import { BadgeMorph } from "../ruixen/badge-morph";
import GlowLinkButton from "../ruixen/glow-link-button";
import { DigitalClock } from "./clock";
import { GlobeCard } from "./globe-card";
import { MatrixCard } from "./martix-card";
import { BlogMarquee } from "./blog-marquee";
import { SocialMarquee } from "./social-marquee";
import AnimatedSlide from "@/components/blocks/animated-slide";
export function BentoPage() {
  return (
    <div className="flex h-full w-full items-center justify-center py-4 max-w-6xl">
      <BentoGrid cols={{ base: 2, md: 3, lg: 4 }} rowHeight="100px">
        {/* <BentoGridItem colSpan={4}> Tabs</BentoGridItem> */}

        <BentoGridItem
          colSpan={2}
          rowSpan={{ base: 3, md: 4 }}
          className="flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <DarkVeil color="#00ff33" speed={2} warpAmount={0.5} />
          </div>
          {/* <DotPattern className="absolute inset-0 z-10" /> */}

          {/* badge */}
          <div className="relative mb-4">
            <BadgeMorph status="loading" label="Building" />
          </div>

          {/* title */}
          <h1 className="pointer-events-none relative text-white text-center text-5xl md:text-6xl leading-none font-semibold tracking-tighter">
            Hi, I&rsquo;m <br /> Can Altun
          </h1>

          {/* subtitle */}
          <div className="relative flex flex-col gap-1 mt-3 px-2 md:px-0 md:mt-4 max-w-md text-center text-xs md:text-sm text-white/60 dark:text-white/50">
            Crafting thoughtful digital experiences with motion, glass, and
            clean typography as a <AnimatedSlide />
          </div>

          {/* actions */}
          <div className="relative mt-4 md:mt-6 flex items-center gap-3">
            <GlowLinkButton
              label="View my works"
              href="/works"
              sound={false}
              style={{ padding: "8px 14px", fontSize: 13 }}
            />
            <GlowLinkButton
              label="View my blog"
              href="/blog"
              sound={false}
              style={{ padding: "8px 14px", fontSize: 13 }}
            />
          </div>
        </BentoGridItem>

        <BentoGridItem colSpan={1} rowSpan={1}>
          <GlobeCard text={""} markerColor="#007517" />
        </BentoGridItem>

        <BentoGridItem colSpan={1} rowSpan={1}>
          <MatrixCard />
        </BentoGridItem>

        <BentoGridItem colSpan={2} rowSpan={2} className="overflow-hidden">
          <BlogMarquee />
        </BentoGridItem>

        <BentoGridItem
          colSpan={2}
          rowSpan={2}
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
