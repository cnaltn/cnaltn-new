import { cn } from "@/lib/utils";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

function BlogCard({ post, featured }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <article
        className={cn(
          "group relative flex h-full flex-col justify-between rounded-sm  p-3 md:p-5 transition-all duration-300",
          "  hover:bg-white/[0.06] ",
          "bg-background/20  ",
        )}
      >
        {/* accent line */}
        {/* <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" /> */}

        <div className="flex flex-col gap-3">
          {/* tags */}
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/40"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* title */}
          <h3
            className={cn(
              "font-semibold leading-tight tracking-tight line-clamp-2 text-white/90 transition-colors group-hover:text-white",
              featured ? "text-lg md:text-xl" : "text-sm md:text-base",
            )}
          >
            {post.title}
          </h3>

          {/* excerpt */}
          <p className="text-xs leading-relaxed text-white/40 line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        {/* meta */}
        <div className="mt-4 flex items-center text-[10px] text-white/30 text-nowrap overflow-hidden justify-between">
          <span>{post.author}</span>
          <span className="text-white/10">·</span>
          <time dateTime={post.date}>{post.date}</time>
        </div>
      </article>
    </Link>
  );
}

interface BlogCardGridProps {
  posts: BlogPost[];
  className?: string;
}

export function BlogCardGrid({ posts, className }: BlogCardGridProps) {
  return (
    <div className={cn("flex flex-col gap-2 h-full", className)}>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

export { BlogCard };
