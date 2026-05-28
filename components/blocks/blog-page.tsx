import { BentoGrid, BentoGridItem } from "@/components/ui/bento";
import { BlogCard } from "./blog-card";
import { posts } from "@/lib/blog-data";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";

const POSTS_PER_PAGE = 10;

export function BlogPage({ page = 1 }: { page?: number }) {
  const featured = posts[0];
  const rest = posts.slice(1);

  const totalPages = Math.ceil(rest.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const paginatedRest = rest.slice(start, start + POSTS_PER_PAGE);

  return (
    <div className="flex flex-col min-h-screen items-center w-full max-w-6xl mx-auto py-8 md:py-12">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        className="mb-6 md:mb-8"
      />
      <BentoGrid cols={{ base: 2, md: 3, lg: 4 }} rowHeight="100px">
        {/* featured post — only on first page */}
        {page === 1 && (
          <BentoGridItem colSpan={2} rowSpan={2}>
            <BlogCard post={featured} featured />
          </BentoGridItem>
        )}

        {paginatedRest.map((post) => (
          <BentoGridItem key={post.slug} colSpan={1} rowSpan={2}>
            <BlogCard post={post} />
          </BentoGridItem>
        ))}
      </BentoGrid>

      {/* pagination controls */}
      {totalPages > 1 && (
        <nav className="flex items-center gap-3 mt-auto pt-10 ">
          {page > 1 && (
            <Link
              href={page === 2 ? "/blog" : `/blog?page=${page - 1}`}
              className="flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              <svg
                className="size-3 rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Previous
            </Link>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={p === 1 ? "/blog" : `/blog?page=${p}`}
              className={`size-7 flex items-center justify-center rounded text-xs transition-colors ${
                p === page
                  ? "bg-white/[0.08] text-white"
                  : "text-white/35 hover:text-white/60"
              }`}
            >
              {p}
            </Link>
          ))}

          {page < totalPages && (
            <Link
              href={`/blog?page=${page + 1}`}
              className="flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Next
              <svg
                className="size-3"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
