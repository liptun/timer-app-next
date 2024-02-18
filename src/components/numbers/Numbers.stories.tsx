import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Numbers } from "./Numbers";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";

const meta: Meta<typeof Numbers> = {
    title: "Common/Numbers",
    component: Numbers,
};
export default meta;

type Story = StoryObj<typeof Numbers>;

export const Primary: Story = {
    args: {
        hours: 1,
        minutes: 1,
        seconds: 1,
        microseconds: 1,
    },
    render: (args) => (
        <ThemeProvider>
            <Numbers {...args} />
        </ThemeProvider>
    ),
};
