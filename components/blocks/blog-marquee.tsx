import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { posts } from "@/lib/blog-data";
import Link from "next/link";

const firstRow = posts.slice(0, Math.ceil(posts.length / 2));
const secondRow = posts.slice(Math.ceil(posts.length / 2));

function BlogMarqueeCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <figure
        className={cn(
          "relative w-full cursor-pointer overflow-hidden rounded-xl border p-2.5 md:p-3 transition-colors",
          "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06]",
        )}
      >
        <div className="flex flex-wrap gap-1 mb-1.5 md:mb-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.08] px-1.5 py-0.5 text-[10px] md:text-[11px] font-medium uppercase tracking-wider text-white/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <figcaption className="text-xs md:text-sm font-medium text-white/80 line-clamp-2 leading-snug">
          {post.title}
        </figcaption>
        <div className="mt-1.5 md:mt-2 flex items-center gap-1.5 md:gap-2 text-[10px] md:text-[11px] text-white/25">
          <span>{post.date}</span>
          <span className="text-white/10">·</span>
          <span>{post.readTime}</span>
        </div>
      </figure>
    </Link>
  );
}

export function BlogMarquee() {
  return (
    <div className="relative flex h-full w-full flex-row items-center justify-center overflow-hidden">
      {/* mobile: single marquee with all posts */}
      <div className="md:hidden h-full w-full px-4">
        <Marquee
          pauseOnHover
          vertical
          fullWidth
          className="[--duration:30s] h-full justify-start items-center"
        >
          {posts.map((post) => (
            <BlogMarqueeCard key={post.slug} post={post} />
          ))}
        </Marquee>
      </div>
      {/* desktop: two marquees split */}
      <div className="hidden md:flex gap-4 px-8 h-full w-full flex-row justify-center">
        <Marquee
          pauseOnHover
          vertical
          fullWidth
          className="[--duration:30s] h-full w-full justify-start items-center"
        >
          {firstRow.map((post) => (
            <BlogMarqueeCard key={post.slug} post={post} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          vertical
          fullWidth
          className="[--duration:30s] h-full w-full justify-start items-center"
        >
          {secondRow.map((post) => (
            <BlogMarqueeCard key={post.slug} post={post} />
          ))}
        </Marquee>
      </div>
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-linear-to-b" />
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t" />
    </div>
  );
}
