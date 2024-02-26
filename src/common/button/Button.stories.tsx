import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";
import { ThemeProvider } from "@/utils/ThemeProvider";

const meta: Meta<typeof Button> = {
    title: "Common/Button",
    component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Primary",
    },
    render: (args) => (
        <ThemeProvider>
            <Button {...args}>{args.children}</Button>
        </ThemeProvider>
    ),
};

export const Disabled: Story = {
    args: {
        children: "Disabled",
        disabled: true,
    },
    render: (args) => (
        <ThemeProvider>
            <Button {...args}>{args.children}</Button>
        </ThemeProvider>
    ),
};
