import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  tanstackStart: {
    target: undefined, // Clear out any previous deployment targets like Cloudflare
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      nitro(), // Required for Vercel to handle TanStack Start SSR
    ],
  },
});