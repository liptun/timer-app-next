import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Clock } from ".";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";

const meta: Meta<typeof Clock> = {
    title: "Components/Clock",
    component: Clock,
};
export default meta;

type Story = StoryObj<typeof Clock>;

export const Basic: Story = {
    args: {
        hideLabels: false,
    },
    render: (args) => (
        <ThemeProvider>
            <Clock {...args} />
        </ThemeProvider>
    ),
};
