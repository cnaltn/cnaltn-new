import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getPostBySlug,
  getAdjacentPosts,
  getAllSlugs,
  posts,
} from "@/lib/blog-data";
import { BlogCard } from "@/components/blocks/blog-card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BlogContent } from "@/components/blocks/blog-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // adjacent posts for pagination
  const { prev, next } = getAdjacentPosts(slug);

  // other posts for "more to read"
  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto py-8 md:py-12">
      {/* breadcrumb */}
      <div className="w-full mb-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />
      </div>

      {/* article */}
      <article className="w-full max-w-6xl">
        {/* header */}
        <header className="mb-10">
          {/* tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/35"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* title */}
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white mb-4">
            {post.title}
          </h1>

          {/* meta */}
          <div className="flex items-center gap-3 text-sm text-white/30">
            <span>{post.author}</span>
            <span className="text-white/10">·</span>
            <time dateTime={post.date}>{post.date}</time>
            <span className="text-white/10">·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* accent divider */}
        <div className="mb-10 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

        {/* content */}
        <BlogContent content={post.content} />
      </article>

      {/* previous / next navigation */}
      <nav className="w-full max-w-6xl mt-16 border-t border-white/[0.06] pt-8">
        <div className="flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group flex flex-col items-start text-left max-w-[48%]"
            >
              <span className="text-[10px] text-white/40 uppercase tracking-wider mb-1.5">
                ← Previous
              </span>
              <span className="text-sm text-white/60 group-hover:text-white transition-colors line-clamp-1">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="group flex flex-col items-end text-right max-w-[48%]"
            >
              <span className="text-[10px] text-white/40 uppercase tracking-wider mb-1.5">
                Next →
              </span>
              <span className="text-sm text-white/60 group-hover:text-white transition-colors line-clamp-1">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>

      {/* more to read */}
      {/* <section className="w-full max-w-6xl mt-20">
        <div className="mb-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        <h3 className="text-sm font-medium text-white/30 uppercase tracking-wider mb-5">
          More to read
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {otherPosts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section> */}
    </div>
  );
}
