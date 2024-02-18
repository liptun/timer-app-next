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
    render: () => (
        <ThemeProvider>
            <Numbers />
        </ThemeProvider>
    ),
};
