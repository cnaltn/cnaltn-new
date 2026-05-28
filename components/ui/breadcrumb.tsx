import Link from "next/link";
import { cn } from "@/lib/utils";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("w-full", className)}>
      <ol className="flex font-medium items-center gap-1.5 text-xs">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;

          return (
            <li
              key={item.label}
              className={cn("flex items-center gap-1.5", isLast && "min-w-0")}
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-white/30 hover:text-white/80 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    isLast
                      ? "text-white/80 truncate"
                      : "text-white/30 shrink-0",
                  )}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <svg
                  className="size-2.5 text-white/30 shrink-0"
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
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
