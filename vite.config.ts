import { defineConfig } from "vite";

export default defineConfig(async () => {
  const tsConfigPaths = await import("vite-tsconfig-paths").then((mod) => mod.default);

  return {
    plugins: [tsConfigPaths()],
    test: {
      globals: true,
    },
  };
});
