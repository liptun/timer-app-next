import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/utils/ThemeProvider";

const preview: Preview = {
    globalTypes: {
        theme: {
            description: "Test",
            defaultValue: "foo",
            toolbar: {
                title: "Test2",
                icon: "circle",
                items: ["foo", "bar"],
                dynamicTitle: true,
            },
        },
    },
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
