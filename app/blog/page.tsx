import { BlogPage } from "@/components/blocks/blog-page";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function Blog({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page ?? "1", 10) || 1);

  return <BlogPage page={currentPage} />;
}
