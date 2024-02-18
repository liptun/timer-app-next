import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    dir: "./",
});

const config: Config = {
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    moduleNameMapper: {
        "^@fontsource/(.*)$": "<rootDir>/__mocks__/@fontsource.ts",
    },
};

export default createJestConfig(config);
