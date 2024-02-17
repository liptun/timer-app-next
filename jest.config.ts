import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    dir: "./",
});

const config: Config = {
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    moduleNameMapper: {
        "^@fontsource/(.*)$": "<rootDir>/__mocks__/@fontsource.js",
    },
};

export default createJestConfig(config);
