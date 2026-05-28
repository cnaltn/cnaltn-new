export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "remix-vs-nextjs-2026",
    title: "Remix vs Next.js in 2026: Choosing Your Framework",
    excerpt:
      "Both are excellent. Both have evolved. Here's a practical comparison to help you pick the right one for your next project.",
    content: `The React framework landscape has consolidated around two major players: Next.js and Remix. Both are mature, well-funded, and production-ready. The choice isn't about which is better — it's about which philosophy matches your project.

## Next.js: The Full-Stack Platform

Next.js is a platform. It gives you server components, static generation, ISR, middleware, image optimization, analytics, and a deployment platform (Vercel). If you want one tool that does everything, Next.js is it.

## Remix: The Web Standards Framework

Remix builds on web fundamentals: Request/Response, FormData, HTTP caching. It doesn't invent new concepts — it enhances what the web already does. If you want to stay close to the platform, Remix is the answer.

## When to Choose Next.js

- You need ISR or static generation
- You're deploying to Vercel
- You want server components and streaming
- You need image optimization out of the box

## When to Choose Remix

- You prefer web standards over framework abstractions
- You're building a data-heavy app with lots of forms
- You want nested layouts with parallel data loading
- You're deploying anywhere (Cloudflare, Fly.io, Node)

## The Real Answer

Try both. Build the same small app in each. Pick the one where you spent less time fighting the framework and more time building features.`,
    author: "Can Altun",
    date: "2026-05-28",
    readTime: "6 min read",
    tags: ["React", "Frameworks"],
  },
  {
    slug: "web-components-in-react",
    title: "Using Web Components in React Without the Pain",
    excerpt:
      "Web Components are framework-agnostic, but React integration has rough edges. Here's how to make them play nice together.",
    content: `Web Components promise framework independence — write once, use anywhere. But React's synthetic event system and prop handling create friction. Here's how to smooth it out.

## The Ref Problem

React doesn't natively understand Web Component attributes and events. You can't pass complex data as attributes — only strings. The workaround: use refs.

\`\`\`tsx
function MyComponent() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.complexProp = { key: "value" };
      ref.current.addEventListener("custom-event", handler);
    }
    return () => ref.current?.removeEventListener("custom-event", handler);
  }, []);

  return <my-element ref={ref}></my-element>;
}
\`\`\`

## The Wrapper Pattern

Create thin React wrappers around Web Components. Handle attribute-to-property mapping, event binding, and type safety in one place.

## When to Reach for Web Components

- Design systems shared across multiple frameworks
- Widgets embedded in third-party sites
- Progressive enhancement of server-rendered HTML

## When to Skip

- Your entire app is React — just use React components
- You need SSR or server components — Web Components are client-only
- Complexity isn't worth the abstraction

Web Components aren't a React replacement. They're a complement — useful at the boundaries where your React app meets the wider web.`,
    author: "Can Altun",
    date: "2026-05-20",
    readTime: "5 min read",
    tags: ["React", "Web"],
  },
  {
    slug: "zustand-state-management",
    title: "Zustand: State Management That Doesn't Hurt",
    excerpt:
      "Forget Redux boilerplate. Zustand gives you global state with a tiny API and zero ceremony — here's how to use it effectively.",
    content: `Zustand is a small, fast, and scalable state management library. It's about 1KB, has no boilerplate, and works outside React. If Redux feels like overkill and Context has performance issues, Zustand is the sweet spot.

## Basic Store

\`\`\`ts
import { create } from "zustand";

interface BearStore {
  bears: number;
  increase: () => void;
}

const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));
\`\`\`

## Why Zustand Over Context

React Context re-renders all consumers when any part of the value changes. Zustand uses selective subscriptions — components only re-render when their specific slice of state changes.

## Middleware

Zustand supports middleware for persistence, devtools, immer integration, and more:

\`\`\`ts
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({ ... }),
    { name: "my-store" }
  )
);
\`\`\`

## When Not to Use

- Simple component state — use \`useState\`
- Server state (API cache) — use React Query or SWR
- Complex derived state with many interdependencies — consider Jotai

Zustand shines for shared UI state: theme, filters, modals, form drafts. It's the "just enough" state library.`,
    author: "Can Altun",
    date: "2026-05-10",
    readTime: "5 min read",
    tags: ["React", "State"],
  },
  {
    slug: "art-of-micro-interactions",
    title: "The Art of Micro-Interactions",
    excerpt:
      "Small moments, big impact — how thoughtful micro-interactions elevate user experience without overwhelming the interface.",
    content: `Micro-interactions are the small, often invisible moments that make an interface feel alive. A button that gently scales on hover. A toggle that snaps with satisfaction. A notification dot that pulses just enough to catch your eye.

## The Four Elements

Every micro-interaction has four parts:
1. **Trigger** — what starts it (click, hover, scroll position)
2. **Rules** — what happens (scale up, change color, move)
3. **Feedback** — what the user perceives (visual, audio, haptic)
4. **Loops & Modes** — what happens over time or on repeat

## Less Is More

The biggest mistake with micro-interactions is overdoing it. Not every element needs to bounce. Not every hover needs a glow. The best micro-interactions are the ones users don't consciously notice — they just feel that the interface is responsive and polished.

## Performance Matters

Every animation has a cost. Use \`transform\` and \`opacity\` whenever possible — they're GPU-accelerated and don't trigger layout recalculations. Avoid animating \`width\`, \`height\`, \`top\`, or \`left\`.

\`\`\`css
.btn { transition: transform 150ms ease, opacity 150ms ease; }
.btn:hover { transform: scale(1.05); }
\`\`\`

## Accessibility

Always respect \`prefers-reduced-motion\`. Some users experience motion sickness from animations. Provide a reduced or disabled alternative.`,
    author: "Can Altun",
    date: "2026-05-25",
    readTime: "6 min read",
    tags: ["UX", "Animation"],
  },
  {
    slug: "rust-for-frontend-developers",
    title: "Rust for Frontend Developers",
    excerpt:
      "Why Rust is becoming the go-to language for frontend tooling — from SWC to Turbopack to Lightning CSS.",
    content: `Rust is eating frontend tooling. SWC replaced Babel. Turbopack challenges Webpack. Lightning CSS outruns PostCSS. And Rome (now Biome) proved a JavaScript toolchain can be written entirely in Rust.

## Why Rust for JS Tooling?

Parsing, transforming, and bundling are CPU-bound tasks. JavaScript is single-threaded by nature. Rust brings multi-threading, zero-cost abstractions, and memory safety without garbage collection. The result: orders of magnitude faster builds.

## SWC: The Babel Replacement

SWC compiles TypeScript and JSX to JavaScript roughly 20x faster than Babel. It's the default compiler in Next.js, Deno, and many modern frameworks. If you use Next.js 13+, you're already using SWC.

## Turbopack

Built on Rust and incremental computation, Turbopack claims to be 700x faster than Webpack for large projects. It only rebuilds what changed, using a granular module graph.

## Should You Learn Rust?

For most frontend developers, you don't need to write Rust. But understanding the ecosystem shift helps you make better tooling decisions. Plus, WASM is increasingly relevant — Rust compiles to WASM, enabling near-native performance in the browser.`,
    author: "Can Altun",
    date: "2026-05-22",
    readTime: "7 min read",
    tags: ["Rust", "Tooling"],
  },
  {
    slug: "monorepo-with-turborepo",
    title: "Monorepo Done Right with Turborepo",
    excerpt:
      "How to structure a monorepo that scales — shared configs, caching, parallel builds, and avoiding common pitfalls.",
    content: `Monorepos used to be painful. Lerna made them manageable. Then Turborepo made them fast. Here's how to set up a monorepo that actually works at scale.

## Why Monorepo?

- **Shared code**: One source of truth for utilities, types, and configs
- **Atomic changes**: Update a shared package and all consumers in one PR
- **Consistent tooling**: ESLint, TypeScript, Prettier — configured once

## Turborepo Basics

Turborepo caches build outputs. If nothing changed in a package, it skips the build entirely. Local cache. Remote cache (Vercel). CI cache. The result: builds that take seconds instead of minutes.

\`\`\`json
{
  "pipeline": {
    "build": { "dependsOn": ["^build"], "outputs": ["dist/**"] },
    "lint": { "dependsOn": ["^build"] },
    "dev": { "cache": false }
  }
}
\`\`\`

## Structure

\`\`\`
apps/
  web/
  docs/
packages/
  ui/
  config-eslint/
  config-typescript/
\`\`\`

Keep packages small and focused. A \`ui\` package for shared components. A \`utils\` package for shared helpers. Config packages for shared tooling configs.

## Pitfalls

- Too many interdependencies creates a spider web. Keep the dependency graph a tree.
- Publishing every package to npm is overhead. Use workspace references (\`"@repo/ui": "*"\`) instead.
- Don't put everything in the monorepo. If something is truly standalone, give it its own repo.`,
    author: "Can Altun",
    date: "2026-05-18",
    readTime: "8 min read",
    tags: ["Tooling", "Architecture"],
  },
  {
    slug: "css-container-queries-guide",
    title: "A Practical Guide to CSS Container Queries",
    excerpt:
      "Container queries finally let components respond to their parent's size. Here's how they work and when to use them over media queries.",
    content: `For years we've been hacking responsive design with media queries tied to the viewport. A card component looks different at 768px — not because the card itself is 768px, but because the viewport is. Container queries fix this.

## The Syntax

\`\`\`css
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}
\`\`\`

When \`.card-wrapper\` is at least 400px wide, the card inside switches to a two-column layout. Regardless of viewport size.

## Use Cases

- **Reusable components**: A card that adapts whether it's in a sidebar or full-width area
- **Dashboard widgets**: Widgets that rearrange based on their allocated grid cell size
- **Email templates**: Layouts that work in any email client's preview pane

## Container Queries vs Media Queries

Media queries answer "how big is the screen?" Container queries answer "how big is my container?" Use container queries for component-level responsiveness and media queries for page-level layout decisions.

## Browser Support

Container queries are supported in all modern browsers (Chrome 105+, Firefox 110+, Safari 16+). If you're using Tailwind v4, the \`@\` prefix syntax is built in.`,
    author: "Can Altun",
    date: "2026-05-14",
    readTime: "5 min read",
    tags: ["CSS", "Layout"],
  },
  {
    slug: "building-modern-design-systems",
    title: "Building Modern Design Systems with Motion & Glass",
    excerpt:
      "A deep dive into crafting cohesive design systems that blend motion, translucency, and clean typography for modern web experiences.",
    content: `Design systems are the backbone of consistent, scalable interfaces. When you add motion and glass-morphism to the equation, you get something that feels alive — surfaces that breathe, transitions that guide, and typography that anchors everything in place.

## Why Motion Matters

Motion isn't decoration. It's communication. A well-timed fade tells the user "this element just appeared." A spring-based scale says "you interacted with this." Subtle parallax on scroll says "there's depth here."

The key principles:
- **Duration**: 150–400ms for micro-interactions, 500–800ms for page transitions
- **Easing**: Use spring physics for natural-feeling interactions, ease-out for entrances
- **Stagger**: Stagger children by 50–100ms for cascading reveals

## Glass as a Material

Translucent surfaces create depth without adding weight. The trick is balancing blur, opacity, and border:

\`\`\`css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
\`\`\`

Too much blur and it looks muddy. Too little and text becomes unreadable. The sweet spot varies by context, but 8–16px blur is a good starting range.

## Typography as Structure

Clean type isn't about picking a nice font. It's about:
1. **Scale**: A clear type scale (12-14-16-20-24-32-48)
2. **Rhythm**: Consistent line heights and spacing
3. **Hierarchy**: Weight and size communicate importance

When motion, glass, and typography work together, the result feels intentional. Every pixel has a purpose.`,
    author: "Can Altun",
    date: "2026-05-15",
    readTime: "8 min read",
    tags: ["Design", "Systems"],
  },
  {
    slug: "bento-grids-in-practice",
    title: "Bento Grids in Practice",
    excerpt:
      "How to use bento-style layouts to create visually engaging dashboards and portfolio pages that stand out.",
    content: `Bento grids — named after Japanese bento boxes — organize content into distinct, variably-sized compartments. They're everywhere now: Apple's event pages, Linear's changelog, Vercel's dashboard.

## The Core Idea

Instead of uniform cards in a fixed grid, bento layouts let elements span different column and row sizes. This creates visual rhythm and naturally guides the eye to priority content.

## Building Blocks

A bento grid needs three things:

1. **Variable spans**: Items can occupy different numbers of columns and rows
2. **Responsive reflow**: On smaller screens, the grid collapses gracefully
3. **Consistent gaps**: Spacing between items stays uniform regardless of size

## When to Use

Bento grids shine for:
- Portfolio pages (hero + skills + projects)
- Dashboards (metrics + chart + activity feed)  
- Landing pages (hero + features + testimonials)
- Blog indexes (featured post + list)

They're less ideal for data-heavy tables or forms — uniform grids work better there.

## Implementation Tips

Start with a responsive CSS grid, then layer on breakpoint-aware span utilities. The real challenge isn't the CSS — it's designing the visual hierarchy. Ask: what deserves the most space? What can be smaller? Group related content in adjacent cells.`,
    author: "Can Altun",
    date: "2026-05-02",
    readTime: "5 min read",
    tags: ["CSS", "Layout"],
  },
  {
    slug: "dark-mode-animations",
    title: "Smooth Dark Mode Transitions",
    excerpt:
      "Techniques for seamless theme switching without flicker, plus subtle animations that respect user preferences.",
    content: `Dark mode is table stakes now. But a bad dark mode implementation — one that flickers or jumps — is worse than no dark mode at all.

## The Flicker Problem

The classic dark mode flicker happens because JavaScript runs after the first paint. The page renders in light mode, then JS detects the preference and swaps to dark. The user sees a flash.

The fix: inline a script in \`<head>\` that reads \`localStorage\` and adds a \`dark\` class to \`<html>\` before anything paints. No flicker.

## Transitioning Colors

Use CSS custom properties for colors and animate them. Tailwind makes this easy with \`dark:\` variants, but smooth transitions need explicit \`transition-colors\` or \`transition-all\` on the elements.

## Respecting Preferences

Always check \`prefers-color-scheme\` as a fallback. The priority:
1. User's explicit toggle (localStorage)
2. System preference (media query)
3. Sensible default (dark, for developer portfolios)

## Beyond Colors

Dark mode isn't just inverting colors. Reduce contrast slightly — pure white text on pure black is harsh. Use \`text-white/90\` instead of \`text-white\`. Soften borders. Adjust shadow opacity.

Done right, dark mode feels like a natural part of the design, not an afterthought.`,
    author: "Can Altun",
    date: "2026-04-20",
    readTime: "6 min read",
    tags: ["UX", "Animation"],
  },
  {
    slug: "typescript-patterns",
    title: "TypeScript Patterns for Cleaner React",
    excerpt:
      "Generic components, discriminated unions, and type-safe patterns that make your React codebase maintainable.",
    content: `TypeScript and React are a powerful combination. But without the right patterns, type complexity grows faster than your component tree.

## Generic Components

When a component needs to work with different data shapes, reach for generics instead of \`any\`:

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>;
}
\`\`\`

The type flows from usage — TypeScript infers \`T\` from the \`items\` you pass in.

## Discriminated Unions for State

Instead of boolean flags, model component state with discriminated unions:

\`\`\`ts
type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };
\`\`\`

Now TypeScript enforces that you check \`status\` before accessing \`data\` — impossible to reference data in loading state.

## Type-Safe Event Handlers

Use \`ComponentProps\` to extract event types instead of writing them manually:

\`\`\`tsx
type ButtonProps = ComponentProps<"button">;
\`\`\`

This stays in sync with React's types automatically.

## Key Takeaway

Let TypeScript do the work. Write types that describe your data, not your implementation. The compiler will guide you to correct code.`,
    author: "Can Altun",
    date: "2026-04-10",
    readTime: "10 min read",
    tags: ["TypeScript", "React"],
  },
  {
    slug: "framer-motion-under-the-hood",
    title: "Framer Motion Under the Hood",
    excerpt:
      "Understanding layout animations, AnimatePresence, and how to avoid common performance pitfalls.",
    content: `Framer Motion makes animation declarative. But understanding what happens under the hood helps you avoid jank and write performant animations.

## Layout Animations

\`layout\` prop is magic — elements animate between positions seamlessly. Under the hood, Framer Motion:

1. Captures the element's bounding box before the layout change
2. Applies the layout change
3. Captures the new bounding box
4. Animates between them using FLIP (First, Last, Invert, Play)

The cost: it measures DOM on every frame. For a few elements, fine. For dozens, consider \`layout="position"\` (only X/Y changes) or \`layout="size"\`.

## AnimatePresence

This handles enter/exit animations for elements being added/removed from React tree. Key detail: it keeps the element in the DOM during the exit animation, which means React doesn't unmount it yet.

Common gotcha: keys must be unique and stable. If the key changes, it's a new element — no exit animation for the old one.

## Performance Tips

- Prefer \`transform\` over \`top\`/\`left\` — GPU-accelerated, no layout thrashing
- Use \`will-change\` sparingly — it reserves GPU memory
- Avoid animating \`box-shadow\` or \`filter\` — expensive to repaint
- \`useReducedMotion\` hook — respect accessibility preferences

## When Not to Use

Framer Motion is 30KB gzipped. For simple CSS transitions (opacity, transform), use Tailwind's \`transition-\` classes. Reach for Framer Motion when you need orchestration — stagger children, spring physics, layout animations, or exit animations.`,
    author: "Can Altun",
    date: "2026-03-28",
    readTime: "7 min read",
    tags: ["Animation", "Performance"],
  },
  {
    slug: "tailwind-v4-whats-new",
    title: "Tailwind v4: What's New",
    excerpt:
      "CSS-first configuration, container queries, and the new OKLCH color system explained with real examples.",
    content: `Tailwind v4 is a major shift. CSS-first configuration, OKLCH colors, and container queries change how we work with the framework.

## CSS-First Configuration

No more \`tailwind.config.js\`. Instead, use \`@theme\` in your CSS:

\`\`\`css
@import "tailwindcss";

@theme {
  --color-brand: oklch(0.6 0.2 250);
  --font-display: "Cabinet Grotesk", sans-serif;
}
\`\`\`

This means your design tokens live in CSS, where they belong. No JS bridge needed.

## OKLCH Colors

OKLCH replaces RGB/HSL as the default color space. Benefits:
- **Perceptually uniform**: Same numeric change = same perceived change
- **Wider gamut**: Access to P3 colors modern displays support
- **Intuitive**: Lightness (L), Chroma (C), Hue (H) are easy to reason about

\`bg-oklch(0.7 0.15 180)\` — 70% lightness, moderate saturation, teal hue.

## Container Queries

Style based on parent size, not viewport:

\`\`\`html
<div class="@container">
  <div class="@lg:text-lg">Responsive to parent</div>
</div>
\`\`\`

Huge for reusable components — a card behaves correctly whether it's in a sidebar or full-width layout.

## Migration Path

Tailwind v3 projects can upgrade incrementally. The old config format still works via \`@config\`. New projects should go CSS-first from the start.`,
    author: "Can Altun",
    date: "2026-03-12",
    readTime: "5 min read",
    tags: ["CSS", "Tailwind"],
  },
  {
    slug: "nextjs-app-router-deep-dive",
    title: "Next.js App Router Deep Dive",
    excerpt:
      "Server components, streaming, partial prerendering — understanding the mental model behind modern Next.js.",
    content: `The App Router changed everything about Next.js. Server Components, streaming, and partial prerendering require a mental model shift — but the payoff is massive.

## Server Components by Default

In the App Router, every component is a Server Component unless you opt in with \`"use client"\`. This means:

- Components render on the server, never ship JS to the client
- You can \`await\` data directly in the component — no \`useEffect\` + \`useState\`
- Database queries, filesystem reads, and API calls happen at request time (or build time with caching)

## Streaming with Suspense

Instead of blocking the entire page on slow data, wrap slow components in \`<Suspense>\`:

\`\`\`tsx
<Suspense fallback={<Skeleton />}>
  <SlowComponent />
</Suspense>
\`\`\`

The shell renders immediately, the slow content streams in when ready. Users see something meaningful 2-3x faster.

## Partial Prerendering (PPR)

PPR combines static and dynamic rendering in a single page. The static shell is prerendered at build time; dynamic holes stream at request time. Best of both worlds.

## When to Use Client Components

You need \`"use client"\` for:
- Event listeners (onClick, onChange)
- Hooks (useState, useEffect, useContext)
- Browser APIs (localStorage, window)
- Animation libraries (Framer Motion)

Push client boundaries as deep as possible — keep the outer layout as server components.`,
    author: "Can Altun",
    date: "2026-02-22",
    readTime: "12 min read",
    tags: ["Next.js", "React"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAdjacentPosts(slug: string): {
  prev: BlogPost | null;
  next: BlogPost | null;
} {
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    prev: index > 0 ? posts[index - 1] : null,
    next: index < posts.length - 1 ? posts[index + 1] : null,
  };
}

export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug);
}
