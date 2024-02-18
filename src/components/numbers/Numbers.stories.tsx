import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Numbers } from "./Numbers";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";

const meta: Meta<typeof Numbers> = {
    title: "Components/Numbers",
    component: Numbers,
};
export default meta;

type Story = StoryObj<typeof Numbers>;

export const Basic: Story = {
    args: {
        number: 12,
        digits: 2,
    },
    render: (args) => (
        <ThemeProvider>
            <Numbers {...args} />
        </ThemeProvider>
    ),
};
