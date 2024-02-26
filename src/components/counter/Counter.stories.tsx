import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Counter } from ".";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";

const meta: Meta<typeof Counter> = {
    title: "Components/Counter",
    component: Counter,
};
export default meta;

type Story = StoryObj<typeof Counter>;

export const Basic: Story = {
    args: {
        hideLabels: false,
    },
    render: (args) => (
        <ThemeProvider>
            <Counter {...args} />
        </ThemeProvider>
    ),
};
