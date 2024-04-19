import path from "path";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
    resolve: {
        alias: [{ find: "src", replacement: path.resolve(__dirname, "./src") }],
    },
    test: {
        environment: "jsdom",
        setupFiles: "./setupTests.ts",
        coverage: {
            provider: "v8",
            reporter: ["text", "json", "html"],
            exclude: [
                ...(configDefaults.coverage.exclude ?? []),
                "__mocks__",
                "next.config.js",
                "**/*.stories.*",
                "**/*.style.*",
                "**/index.*",
            ],
        },
    },
});
