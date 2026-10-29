import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/features/home/HomePage";
import { homeMeta } from "@/features/home/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: homeMeta.title },
      { name: "description", content: homeMeta.description },
      { property: "og:title", content: homeMeta.ogTitle },
      { property: "og:description", content: homeMeta.ogDescription },
    ],
  }),
  component: HomePage,
});

