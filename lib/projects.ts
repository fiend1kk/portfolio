export const projects = [
  {
    slug: "perf-audit-tool",
    title: "Performance Audit Tool",
    description: "Lighthouse/PSI wrapper with CI gating and budgets.",
    stack: ["Next.js", "TypeScript", "Lighthouse", "Vercel"],
    image: "/me.jpg",
    demo: "https://example.com/perf",
    repo: "https://github.com/your/perf-audit",
  },
  {
    slug: "realtime-dashboard",
    title: "Realtime Dashboard",
    description: "Socket.io powered metrics dashboard with role-based auth.",
    stack: ["Next.js", "Socket.io", "Prisma"],
    image: "/images/realtime.jpg",
    demo: "https://example.com/realtime",
    repo: "https://github.com/your/realtime",
  },
  {
    slug: "mdx-blog",
    title: "MDX Blog Starter",
    description: "MDX blogging with RSC and file-based content.",
    stack: ["Next.js", "MDX"],
    image: "/images/blog.jpg",
    demo: "https://example.com/blog",
    repo: "https://github.com/your/mdx-blog",
  },
] as const;
